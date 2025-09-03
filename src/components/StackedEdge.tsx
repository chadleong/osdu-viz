import React, { useRef, useState, useEffect } from "react"
import { MarkerType } from "@xyflow/react"

export default function StackedEdge(props: any) {
  const { id, sourceX, sourceY, targetX, targetY, markerEnd, style, data, label } = props

  // draw a smooth cubic bezier curve between source and target
  const dx = targetX - sourceX
  const dy = targetY - sourceY
  // control points — place both controls halfway in X and anchored to source/target Y for a smooth S-like curve
  const curvature = 0.5
  const c1x = sourceX + dx * curvature
  const c1y = sourceY
  const c2x = targetX - dx * curvature
  const c2y = targetY
  const path = `M ${sourceX},${sourceY} C ${c1x},${c1y} ${c2x},${c2y} ${targetX},${targetY}`

  // compute the midpoint on the cubic bezier (t = 0.5) for label placement
  const cubicAt = (t: number, p0: number, p1: number, p2: number, p3: number) => {
    const mt = 1 - t
    return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3
  }
  const midX = cubicAt(0.5, sourceX, c1x, c2x, targetX)
  const midY = cubicAt(0.5, sourceY, c1y, c2y, targetY)
  const offsetY = (data && data.labelOffsetY) || 0

  const stroke = (style && style.stroke) || "#475569"
  const strokeWidth = (style && style.strokeWidth) || 2
  const dash = (style && style.strokeDasharray) || "none"

  // refs + state to measure text and draw a background rect
  const textRef = useRef<SVGTextElement | null>(null)
  const [bbox, setBbox] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (textRef.current) {
      try {
        const b = textRef.current.getBBox()
        setBbox({ width: b.width, height: b.height })
      } catch (err) {
        // some environments may not support getBBox; fallback to null
        setBbox(null)
      }
    }
  }, [label])

  // label background styling (match previous labelBgStyle)
  const paddingX = 6
  const paddingY = 4
  const rectRx = 4
  const rectFill = "white"
  const rectStroke = "#d1d5db"
  const rectStrokeWidth = 1
  const rectFillOpacity = 0.95

  // compute rect position if we have bbox, otherwise approximate
  const approxWidth = (label || "").toString().length * 6
  const approxHeight = 12
  const w = bbox ? bbox.width : approxWidth
  const h = bbox ? bbox.height : approxHeight

  const rectX = midX - w / 2 - paddingX
  const rectY = midY + offsetY - h / 2 - paddingY

  return (
    <g id={id} style={{ pointerEvents: "none" }}>
      <path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={dash}
        markerEnd={markerEnd}
      />
      {label && (
        <g>
          {/* background rect */}
          <rect
            x={rectX}
            y={rectY}
            width={w + paddingX * 2}
            height={h + paddingY * 2}
            rx={rectRx}
            fill={rectFill}
            stroke={rectStroke}
            strokeWidth={rectStrokeWidth}
            fillOpacity={rectFillOpacity}
            style={{ pointerEvents: "none" }}
          />
          {/* centered text */}
          <text
            ref={textRef}
            x={midX}
            y={midY + offsetY}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 10, fontWeight: 600, fill: "#374151", pointerEvents: "none" }}
          >
            {label}
          </text>
        </g>
      )}
    </g>
  )
}
