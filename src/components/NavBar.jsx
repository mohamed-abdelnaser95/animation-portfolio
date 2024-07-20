import styled from "styled-components"

const Navbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    @media only screen and (max-width: 768px){
        width: 100%
    }
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 5px;
    }
`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`
const Logo = styled.h2`
    font-size: 30px;

    @media only screen and (max-width: 768px){
        font-size: 25px;
    }
`
const Dot = styled.span`
    font-size: 30px;
    color : #b83434;
`
const List = styled.ul`
    list-style:none;
    display: flex;
    gap: 10px;
    @media only screen and (max-width: 768px){
        display: none;
    }
`
const ListItem = styled.li`
`
const Right = styled.div`
`
const Button = styled.button`
    border:none;
    padding: 5px 10px;
    border-radius: 2px;
    background-color: #b83434;
    color: white;
    cursor: pointer;
`
const NavBar = () => {

    return (
        <Navbar>
            <Container>
                <Left>
                    <Logo>Portfolio<Dot>.</Dot></Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About Me</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Studio</ListItem>
                    </List>
                </Left>
                <Right>
                    <Button>Contact Me</Button>
                </Right>
            </Container>
        </Navbar>
    )
}

export default NavBar