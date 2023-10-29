import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkBack = styled(Link)`
display: block;
width: 200px;
padding: 10px 30px;
margin-right: auto;
margin-bottom: 20px;
border-radius: ${p=>p.theme.spacing(2)};
text-decoration: none;
color: ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.grey};
font-weight: 600;
text-align: center;
cursor: pointer;
&:hover,:focus {
color: ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.yellow};
}
`;

export const MovieInfo = styled.div`
text-align: left;
`;

export const MoviePoster = styled.img`
padding-left: 16px;
width: 300px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieDescriptions = styled.div`
width:500px;
padding: 8px 16px;
margin-right:auto;
`;

export const MovieTitle = styled.h2`
margin-top: 8px;
margin-bottom: 2px;
font-weight: 700;
font-size: 30px;
line-height: 1.5;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.black};
`;

export const MovieOriginalTitle = styled.p`
margin: 0;
margin-bottom: 2px;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.black};
`;

export const MovieText = styled.p`
margin: 0;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
`;

export const LinkCast = styled(NavLink)`
  padding: 10px 40px;
  border-radius: ${p=>p.theme.spacing(2)};
  text-decoration: none;
  color: ${p=>p.theme.colors.white};
  background-color: ${p=>p.theme.colors.grey};
  font-weight: 600;

  &.active {
    color: ${p=>p.theme.colors.black};
    background-color: ${p=>p.theme.colors.yellow};
  }
`;

export const LinkReviews = styled(NavLink)`
  padding: 10px 40px;
  border-radius: ${p=>p.theme.spacing(2)};
  text-decoration: none;
  color: ${p=>p.theme.colors.white};
  background-color: ${p=>p.theme.colors.grey};
  font-weight: 600;

  &.active {
    color: ${p=>p.theme.colors.black};
    background-color: ${p=>p.theme.colors.yellow};
  }
`;

export const MoviePage = styled.ul`
display: flex;
column-gap: 20px;
padding: 15px 0;
list-style: none;
`;