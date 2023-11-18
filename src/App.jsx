import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Physics, RigidBody } from '@react-three/rapier'
import Fireworks from './Fireworks'
import ExplosionConfetti from './Fireworks'

function App() {


  return (
    <Canvas shadows style={{ width: '100vw', height: '100vh' }} camera={{ position:[5,5,5]}} >
      <directionalLight castShadow position={[5, 10, 5]} />
      <ambientLight />
      <OrbitControls />

      <group position={[0,9,0]}>
      <ExplosionConfetti rate={2} amount={100} fallingHeight={3} areaWidth={0.1} areaHeight={0.1} enableShadows isExploding colors={['yellow', 'white', 'orange']} />
      </group>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[5,0.5,5]} />
          <meshStandardMaterial color="hotpink" />  
        </mesh>

        <mesh receiveShadow castShadow position={[0, 2.5, -2.5]}>
          <boxGeometry args={[5,5,0.5]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
 
    </Canvas>
  )
}

export default App
