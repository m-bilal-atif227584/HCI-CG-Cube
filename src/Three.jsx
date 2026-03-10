import { Canvas, useFrame } from "@react-three/fiber"
import { DragControls, OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function Box({ isRotating, setIsRotating, speed, size}) {
  const meshRef = useRef()
  const [color, setColor] = useState("#bf43fd")

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

  useFrame((state, delta) => {
    if (isRotating && meshRef.current) {
        meshRef.current.rotation.x += delta*speed
        meshRef.current.rotation.y += delta*speed
    }
  })

  return (
    <mesh scale={[size, size, size]} onPointerEnter={() => setColor(generateRandomColor())} onPointerLeave={() => setColor("#bf43fd")} onContextMenu={() => setIsRotating(!isRotating)} ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function Scene() {
  const [isRotating, setIsRotating] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [size, setSize] = useState(1)

  return (
    <div style={{ backgroundColor : "#250532" }} >
        
      <div style={styles.panel}>
         <button
          style={styles.button}
          onClick={() => setIsRotating(true)}
        >
         Start
        </button>
        <div style={{ display : "flex", flexDirection : "column" }}>
          <label style={{ color : "white"}} htmlFor="speed">Speed : {speed}</label>
        <input style={{ cursor : "pointer" }} type="range" name="speed" id="speed" min="0" max="5" step="0.1" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
        </div>
        <div style={{ display : "flex", flexDirection : "column" }}>
          <label style={{ color : "white" }} htmlFor="size">Size : {size}</label>
        <input style={{ cursor : "pointer" }} type="range" name="size" id="size" min="0.1" max="3" step="0.1" value={size} onChange={(e) => setSize(Number(e.target.value))} />
        </div>
        <button
          style={styles.button}
          onClick={() => setIsRotating(false)}
        >
          Stop
        </button>
      </div>

      <Canvas style={{ height: "100vh" }} >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Box isRotating={isRotating} setIsRotating={setIsRotating} speed={speed} size={size} />
        <OrbitControls enableZoom={false}  />
      </Canvas>
    </div>
  )
}

const styles = {
  // container: {
  //   width: "100%",
  //   height: "100vh",
  //   overflow: "hidden",
  //   fontFamily: "sans-serif",
  // },
  panel: {
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "15px",
    padding: "12px 20px",
    backdropFilter: "blur(15px)",
    background: "rgba(255, 255, 255, 0.13)",
    borderRadius: "20px",
    zIndex: 10,
  },
  button: {
    padding: "8px 18px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #bf43fd, #ff4df0)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
}