import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Desk() {
  const { scene } = useGLTF('/desk.glb');         // put your .glb in /public
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1.6, 4], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} />
      <Suspense fallback={<Html>loading…</Html>}>
        <Desk />
      </Suspense>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}
