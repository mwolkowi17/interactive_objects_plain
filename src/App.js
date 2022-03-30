
import React, { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'

import { OrbitControls, Html } from '@react-three/drei'


import { Model2 } from './Model2'
import { Model3 } from './Model3'
import { Model4 } from './Model4'
import { Model5 } from './Model5'
import { Model6 } from './Model6'
import { Model7 } from './Model7'
import { Strips1 } from './Strips'
import { Shapes } from './Shapes'
import { Arrows1 } from './Arrows'
import { Text1 } from './Text'
import { Numbers } from './Numbers'




export default function App() {
  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'black' }}>loading...</Html>
  }

  return (

    <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [-10, 6, 30] }}>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={40}
      />
      <Suspense fallback={<Loader />}>
        <ambientLight />
        {/*} <pointLight position={[5, 10, 20]} />*/}


        <Strips1 position={[0, 0, 0]} />

        <Shapes position={[0, 0, 0]} />
        <Arrows1 position={[0, 0, 0]} />
        <Text1 position={[0, 0, 0]} />
        <Numbers position={[0, 0, 0]} />
        <Model2 position={[0, 0, 0]} />
        <Model3 position={[0, 0, 0]} />
        <Model4 position={[0, 0, 0]} />
        <Model5 position={[0, 0, 0]} />
        <Model6 position={[0, 0, 0]} />
        <Model7 position={[0, 0, 0]} />

      </Suspense>
    </Canvas>
  )
}