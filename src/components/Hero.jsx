/* eslint-disable react/no-unknown-property */
import styled from "styled-components"
import NavBar from "./NavBar"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 1400px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 768px){
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        flex-direction: column;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 1;
`
const Qute = styled.h1`
    font-size: 60px;

    @media only screen and (max-width: 768px){
        font-size: 30px;
        text-align:center;
    }
`
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: felx-start;
    gap: 10px;

    @media only screen and (max-width: 768px){
        font-size: 17px
    }
`
const Line = styled.img`
    height: 10px;
`
const Word = styled.p`
    color: #b83434;
    font-weight: 500;
`
const Desc = styled.p`
    font-size: 17px;

    @media only screen and (max-width: 768px){
        font-size: 14px
    }
`
const Button = styled.button`
    border:none;
    width: 100px;
    padding: 5px 10px;
    border-radius: 2px;
    background-color: #b83434;
    color: white;
    cursor: pointer;
`
const Right = styled.div`
    flex: 3;
    position: relative;
`
const HeroImg = styled.img`
    position: absolute;
    height: 600px;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin: auto;
    animation: moveUpDown 2s ease infinite alternate;
    @keyframes moveUpDown {
        to {
            transform: translateY(20px);
        }
    }

    @media only screen and (max-width: 768px){
        height: 350px;
    }
`

const Hero = () => {

    return (
        <Section>
            <NavBar />
            <Container>
                <Left>
                    <Qute>Thing. Make. Solve</Qute>
                    <Middle>
                        <Line src="./img/line.png" />
                        <Word>What I Do !</Word>
                    </Middle>
                    <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[1,2,3]}/>
                        <Sphere args={[1,100,200]} scale={2.5}>
                            <MeshDistortMaterial 
                                // purble color #3d1c56
                                color="#624099"
                                distort={.5}
                                attach='material'
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <HeroImg src='./img/moon.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero