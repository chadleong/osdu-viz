// Minimal IndexedDB wrapper used as an offline cache for locally loaded schemas.
const DB_NAME = "osdu-viz-cache"
const STORE = "schemas"

export type CachedSchema = {
  path: string
  schema: any
  id?: string
  title?: string
  version?: string
  fetchedAt?: number
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "path" })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

/** Write many entries in a single transaction (far faster than one transaction per file). */
export async function idbPutMany(items: CachedSchema[]): Promise<void> {
  if (items.length === 0) return
  const db = await openDB()
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite")
      const store = tx.objectStore(STORE)
      for (const item of items) store.put(item)
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
      tx.onabort = () => reject(tx.error)
    })
  } finally {
    db.close()
  }
}

export async function idbGetAll(): Promise<CachedSchema[]> {
  const db = await openDB()
  try {
    return await new Promise<CachedSchema[]>((resolve, reject) => {
      const req = db.transaction(STORE, "readonly").objectStore(STORE).getAll()
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  } finally {
    db.close()
  }
}
