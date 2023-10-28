import styled from "styled-components";

export const SearchForm = styled.form`
display:flex;
gap: 10px;
justify-content: center;
padding: 5px 0;
background-color: ${p=>p.theme.colors.grey};
`;

export const SearchInput = styled.input`
display: inline-block;
font-size: 20px;
border: none;
border-radius: 4px;
outline: none;
padding-left: 4px;
padding-right: 4px;
font-weight: 600;
`;
export const SearchBtn = styled.button`
  padding: 10px 40px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: ${p=>p.theme.colors.black};
  background-color: ${p=>p.theme.colors.yellow};
  font-weight: 600;
  cursor: pointer;
`;