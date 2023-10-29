import styled from "styled-components";

export const SearchForm = styled.form`
display:flex;
gap: 10px;
justify-content: center;
padding: 5px 0;
background-color: ${p=>p.theme.colors.grey};
`;

export const SearchInput = styled.input`
padding-left: 4px;
padding-right: 4px;
display: inline-block;
font-size: 20px;
border: none;
border-radius: ${p=>p.theme.spacing(2)};
outline: none;
font-weight: 600;
`;

export const SearchBtn = styled.button`
  padding: 10px 40px;
  border-radius: ${p=>p.theme.spacing(2)};
  border: none;
  text-decoration: none;
  color: ${p=>p.theme.colors.black};
  background-color: ${p=>p.theme.colors.yellow};
  font-weight: 600;
  cursor: pointer;
`;