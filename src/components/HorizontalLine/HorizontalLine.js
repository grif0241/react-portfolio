import React from 'react'

export default function HorizontalLine({ color, height }) {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "2rem 0" }}>
      <div style={{ flex: 1, backgroundColor: color, height: height }} />

      {/* <p style={{ margin: "0 10px" }}>Time To Program</p> */}

      <div style={{ flex: 1, backgroundColor: color, height: height }} />
    </div>
  )
}
