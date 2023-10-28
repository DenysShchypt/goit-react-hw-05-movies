import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
gap: 20px;
    
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 10px 40px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p=>p.theme.colors.white};
  background-color: ${p=>p.theme.colors.grey};
  font-weight: 600;

  &.active {
    color: ${p=>p.theme.colors.black};
    background-color: ${p=>p.theme.colors.yellow};
  }
`;