import styled from "styled-components";

export const CharactersBox = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 15px;
gap: 15px;
list-style: none;
text-align: center;
`;

export const CharacterItem = styled.li`
flex-grow:1;
width: calc(100% / 6);
text-decoration: none;
text-align: start;
`;

export const CharacterImg = styled.img`
height: 15em;
width: 100%;
float: left;
background-size: cover;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const TitleCharacter = styled.h3`
margin-top: 8px;
margin-bottom: 8px;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.black};
`;