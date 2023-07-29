import { useState } from "react";
import { Container } from "../styles";
import { styled } from "styled-components";

const Body = () => (
    <>
        <Navbar/>
        <Container>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oVoP3hITn_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Container>
    </>
    
);

export default Body;


const NavItem = styled.li`
    float: left;
    padding: 16px;
    cursor: pointer;
    &:hover {        
        border: 1px solid white;
    }
`;

const List = styled.ul`
  list-style-type: none;
  width: 1140px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`

const Navbar = () => (
    <>
        <div style={{ background: "333333", color: "white"}}>
            <List>
                <NavItem>        Team        </NavItem>
                <NavItem>Schedule</NavItem>
                <NavItem>Nyatri Tournament</NavItem>
                <NavItem>Photos</NavItem>
            </List>
        </div>
    </>
)