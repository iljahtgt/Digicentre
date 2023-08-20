import React, {useRef,useState,Suspense} from "react";
import {Canvas,useFrame, useLoader} from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { TextureLoader} from "three";
// import { SphereBufferGeometryProps } from "react-three-fiber";
// import CameraControls from 'camera-controls'

function Box(props) {
    const ref = useRef();
    let texture = useLoader(TextureLoader,'image/map.png');
    return (
      <mesh
        {...props}
        ref={ref}
        >
        <boxGeometry attach="geometry" args={[30, 0.1, 30]} />
        <meshStandardMaterial roughness={0.5} map={texture} attach="material"/>
      </mesh>
    )
  }

function building_position() {
   let building_list = [];
   for(let i = 0; i < 10; i ++) {
        let x = Math.floor(Math.random()*10);
        let y = 1;
        let z = Math.floor(Math.random()*10);
        building_list[i] = [x,y,z];
   }
   return building_list
}
const BuildingCreat = ({position,color}) => {
    const mesh = useRef(null);
    let sideBuilding = useLoader(TextureLoader,'image/sideBuilding.png');
    let sizeX = Math.abs(Math.round(Math.random()*(30+20-1)-20)/20);
    let sizeY = Math.abs(Math.round(Math.random()*(40+10-1)-10)/20);
    let sizeZ = Math.abs(Math.round(Math.random()*(30+20-1)-20)/20);
    sizeY = sizeY <= 0.1 ? 0.3 : sizeY;
    position[1] = sizeY/2;
    sizeX = sizeX === 0 ? 0.4 : sizeX;
    sizeZ = sizeZ === 0 ? 0.4 : sizeZ; 
    return(
        <>
            <a.mesh 
            position={position} 
            ref={mesh}
            >
                <a.boxGeometry attach='geometry' args={[sizeX, sizeY, sizeZ]} />
                <a.meshStandardMaterial attach='material' map={sideBuilding}/>
            </a.mesh>
        </>
    )
}
const buildings = building_position().map((data,i) => 
(<BuildingCreat key={i} position={data} />)
)



function question2() {
    return (
        <Canvas camera={{position:[9,3,0]}} color={'#003C9D'} dpr={[1, 2]} height='100vh'>
            <color attach="background" args={['#003C9D']} />
        <ambientLight intensity={5} />
        <spotLight position={[1.2, 30, 0]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
            <Box position={[1.2, 0, 0]} />
            {buildings}
        </Suspense>
        <OrbitControls />
      </Canvas>
    );
}
  
  export default question2;