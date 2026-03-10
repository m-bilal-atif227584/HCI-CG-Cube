import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"

/*
  SceneCanvas
  -----------
  Responsible for rendering the Three.js scene

  Includes:
  - lights
  - cube
  - orbit controls
*/

export default function SceneCanvas({
  isRotating,
  setIsRotating,
  speed,
  size
}) {

  return (
    <Canvas style={{ height: "100vh" }}>

      {/* Ambient light for overall brightness */}
      <ambientLight intensity={0.5} />

      {/* Directional light to create shadows and highlights on the edges of cube. */}
      <directionalLight position={[2, 2, 2]} />

      {/* 3D Cube */}
      <Box
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        speed={speed}
        size={size}
      />

      {/* Camera controls */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}