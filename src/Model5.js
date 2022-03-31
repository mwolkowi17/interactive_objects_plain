import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model5(props) {
  const group = useRef()
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scene } = useGLTF('/figure5.gltf')
  
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}
     onClick={()=>console.log('clicked')}
     onPointerOver={() => setHovered(true)}
     onPointerOut={() => setHovered(false)}/>
    </group>
  )
}

useGLTF.preload('/figure5.gltf')