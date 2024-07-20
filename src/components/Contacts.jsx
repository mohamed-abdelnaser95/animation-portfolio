import styled from "styled-components";
import MapChart from "./Map";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const Left = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

    @media only screen and (max-width: 768px){
        padding: 10px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
`
const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;

    @media only screen and (max-width: 768px){
        align-items: space-between;
    }
`
const Title = styled.h1`
    font-weight: 400;
    color: #e8e6e6;

    @media only screen and (max-width: 768px){
        font-size: 30px; 
    }
`

const InputName = styled.input`
    padding: 20px;
    border: none;
    border-radius: 5px 0;
    font-size: 17px; 
    outline: none;
    background-color: #e8e6e6;

    @media only screen and (max-width: 768px){
        font-size: 15px; 
        padding: 10px;
    }
`
const InputEmail = styled.input`
    padding: 20px;
    border: none;
    border-radius: 5px 0;
    font-size: 17px; 
    outline: none;
    background-color: #e8e6e6;

    @media only screen and (max-width: 768px){
        font-size: 15px; 
        padding: 10px;
    }
`
const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px 0;
    font-size: 17px; 
    outline: none;
    background-color: #e8e6e6;
`
const Button = styled.button`
    border:none;
    font-size: 17px; 
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #b83434;
    color: #e8e6e6;
    cursor: pointer;
    transition: .5s all;
    &:hover{
        background-color: #d71c1c;
    }

    @media only screen and (max-width: 768px){
        width: fit-conetnt;
    }
`
const Right = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px){
        display: none;
    }
`

const Contacts = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_9a6y0yp', 'template_vrpqt3p', form.current, {
                publicKey: '1Sv6Fty2kwJcHVILB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <InputName placeholder="Name" name="user_name"/>
                        <InputName placeholder="Subject" name="user_sub"/>
                        <InputEmail placeholder="Email" name="user_email"/>
                        <TextArea placeholder="Write Your Message" rows={10} name="user_message"/>
                        <Button type="submit">Send</Button>
                    </Form>
                </Left>
                <Right>
                    <MapChart />
                </Right>
            </Container>
        </Section>
    )
}

export default Contacts