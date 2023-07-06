/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Canvas } from "@react-three/fiber";
import { IPad } from "../Carousel/IPad/IPad";
import { CameraControls, Float, Stage } from "@react-three/drei";

// Create React component standard way
function ThreeViewer() {
  return (
    <Canvas style={{ height: "60vh" }} shadows>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stage shadows="contact" intensity={1}>
        <Float floatingRange={[0.1, 0.3]}>
          <IPad />
        </Float>
      </Stage>
    </Canvas>
  );
}

// Convert React component to Qwik component
export const QThreeViewer = qwikify$(ThreeViewer);
