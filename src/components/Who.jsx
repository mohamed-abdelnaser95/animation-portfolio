/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 10px;
    }
`;
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex-direction: column-reverse;
        align-items: space-between;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 1;
`;
const Qute = styled.h1`
    font-size: 60px;

    @media only screen and (max-width: 768px){
        font-size: 30px;
        text-align:center;
    }
`;
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: felx-start;
    gap: 10px;
`;
const Line = styled.img`
    height: 10px;
`;
const Word = styled.p`
    color: #b83434;
    font-weight: 500;
`;
const Desc = styled.p`
    font-size: 17px;

    @media only screen and (max-width: 768px){
        font-size: 14px
    }
`;
const Button = styled.button`
    border:none;
    width: 120px;
    padding: 5px 10px;
    border-radius: 2px;
    background-color: #b83434;
    color: white;
    cursor: pointer;
    transition: .5s all;
    &:hover{
        background-color: #d71c1c;
    }
`;

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov: 25, position:[3,3,3]}}>
                        <OrbitControls enableZoom={false} autoRotate/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[1,2,3]}/>
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Qute>Think Outside The Square Space</Qute>
                    <Middle>
                        <Line src="./img/line.png" />
                        <Word>who Am I !</Word>
                    </Middle>
                    <Desc>
                        A Frontend Developer Creating Dynamic UI Using React JS.
                    </Desc>
                    <Button>See My Works</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;
