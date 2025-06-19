import React from 'react'
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from "maath/random/dist/maath-random.esm"
import * as THREE from "three";
import { Suspense } from 'react';

const Stars = (props) => {

    useFrame((state,delta)=>{
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })
    const ref = useRef(null)
    const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
    return (
        <group rotation={[0,0,Math.PI/4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />

            </Points>

        </group>


    )
}
const StarsCanvas = ({z}) => {
    
    return (
        <div className={`h-auto  w-full absolute inset-0`} style={{ zIndex: z }} >

            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>

                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>

        </div>
    )
}
export default StarsCanvas