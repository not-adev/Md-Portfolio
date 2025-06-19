import React, { useRef } from 'react'
import { Box, PerspectiveCamera, OrbitControls, Circle, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { color } from 'three/tsl'
import { Canvas } from '@react-three/fiber'




const Balls = ({width,scale,color}) => {
    return (
        <Canvas className={width}>
          <ambientLight intensity={1} />

            <mesh scale={scale} >

                {/* <Lighthelper/>  */}
                <directionalLight position={[-1.1, -2,-1.3]} intensity={25}
                    color={color} 
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                  
                />
                <directionalLight castShadow shadow-mapSize={[2048, 2048]} position={[0.4, -2,-1.3]} intensity={15}
                    color={color} 
                    
                  
                />
               
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial color={"gray"} roughness={46} />
            </mesh>
        </Canvas>
    )
}

export default Balls