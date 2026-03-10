import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

/*
  Box Component
  -------------
  This component renders the 3D cube and handles:

  - rotation animation
  - hover color change
  - right click rotation toggle
*/

export default function Box({ isRotating, setIsRotating, speed, size }) {

  // reference to access the THREE.js mesh directly
  const meshRef = useRef()

  // state to store cube color
  const [color, setColor] = useState("#bf43fd")

  /*
    Function to generate random RGB color
  */
  const generateRandomColor = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
  }


  /*
    useFrame
    --------
    Runs on every render frame (~60fps)

    Used here to rotate cube continuously
    when rotation is enabled
  */
  useFrame((state, delta) => {

    if (isRotating && meshRef.current) {

      // rotate cube along x and y axis
      meshRef.current.rotation.x += delta * speed
      meshRef.current.rotation.y += delta * speed
    }
  })

  return (

    //mesh is a object of three.js (combination of geometry & material), it renders a 3D object in scene.
    <mesh
      ref={meshRef}

      // scale cube based on slider
      scale={[size, size, size]}

      // change color when mouse enters cube
      onPointerEnter={() => setColor(generateRandomColor())}

      // restore original color when mouse leaves
      onPointerLeave={() => setColor("#bf43fd")}

      // right click toggles rotation
      onContextMenu={() => setIsRotating(!isRotating)}
    >

      {/* Cube geometry (defines the shape / geometry of mesh) args={[width, height, depth]} */}
      <boxGeometry args={[2, 2, 2]} />

      {/* Cube material */}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}