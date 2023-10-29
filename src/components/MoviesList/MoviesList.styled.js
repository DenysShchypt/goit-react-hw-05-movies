
import { Link } from "react-router-dom";
import styled from "styled-components";



export const BoxMovies = styled.ul`
display: flex;
flex-wrap: wrap;
padding:  0 15px;
gap: 15px;
list-style: none;
text-align: center;
`;

export const ItemMovie = styled.li`
flex-grow:1;
width: calc(100% / 5);
text-decoration: none;
`;

export const LinkMovie = styled(Link)`
text-decoration: none;
cursor: pointer;
`;

export const ImgMovie = styled.img`
height: 20em;
width: 100%;
float: left;
background-size: cover;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const DescriptionMovie = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top:auto;
padding:6px 12px;
`;

export const TitleMovie = styled.h2`
margin-top: 8px;
margin-bottom: 8px;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.black};
`;

export const CreateMovie = styled.p`
margin: 0;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.black};
`;
