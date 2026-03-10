import { useState } from "react"
import SceneCanvas from "./components/SceneCanvas"
import ControlPanel from "./components/ControlPanel"

/*
  Main Scene Component

  Responsible for:
  - managing global state
  - rendering UI panel
  - rendering 3D scene
*/

export default function Scene() {

  // rotation state
  const [isRotating, setIsRotating] = useState(true)

  // cube rotation speed
  const [speed, setSpeed] = useState(1)

  // cube scale
  const [size, setSize] = useState(1)


  return (
    <div style={{ backgroundColor: "#250532" }}>

      {/* Control Panel UI */}
      <ControlPanel
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
        setIsRotating={setIsRotating}
      />

      {/* Three.js Scene */}
      <SceneCanvas
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        speed={speed}
        size={size}
      />
    </div>
  )
}
