/* Simple service worker for caching schema assets */
const CACHE_VERSION = "osdu-viz-v1"
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`

self.addEventListener("install", (event) => {
  // Skip waiting so new SW takes control faster on next reload
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  // Clean up old caches
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

function isSameOrigin(url) {
  try {
    const u = new URL(url, self.location.origin)
    return u.origin === self.location.origin
  } catch {
    return false
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request
  const url = new URL(req.url)

  const isSchemaIndex = isSameOrigin(req.url) && url.pathname === "/schema-index.json"
  const isData =
    isSameOrigin(req.url) && (url.pathname.startsWith("/data/") || url.pathname.startsWith("/public/data/"))

  // Only handle GET
  if (req.method !== "GET") return

  if (isSchemaIndex) {
    // Network-first for schema index (small), fallback to cache
    event.respondWith(
      fetch(req)
        .then((resp) => {
          const clone = resp.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, clone))
          return resp
        })
        .catch(() => caches.match(req))
    )
    return
  }

  if (isData) {
    // Cache-first for heavy data files
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached
        return fetch(req)
          .then((resp) => {
            const clone = resp.clone()
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, clone))
            return resp
          })
          .catch(() => cached)
      })
    )
    return
  }

  // Default: pass-through
})
