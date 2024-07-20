import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Atom from "./Atom"
import styled from "styled-components"

const DESC = styled.div`
    width:200px;
    height: 100px;
    font-size: 14px;
    color: #555;
    position: absolute;
    top: 0px;
    right: -120px;
    background-color:white;
    border-radius: 5px;
    padding: 10px;

    @media only screen and (max-width: 768px){
        position: relative;
        right: 0;
        width: fit-content;
        height: fit-content;
    }
`
function FrontEnd() {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/>
                <Stage environment='city' intensity={.9}>
                    <Atom />
                </Stage>
            </Canvas>
            <DESC>
                We design products with a strong focus on both world class design and ensuring your
                product is a marget success
            </DESC>
        </>
    )
}

export default FrontEnd

// gltf-pipeline -i scene.gltf -o hologram.gltf -d
// npx gltfjsx hologram.gltf --transform
