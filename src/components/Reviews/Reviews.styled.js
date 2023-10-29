import styled from "styled-components";

export const ReviewsBox = styled.div`
padding:15px;
`;

export const ReviewsAuthor = styled.h3`
margin-top: 8px;
margin-bottom: 2px;
font-weight: 500;
font-size: 20px;
line-height: 1.5;
letter-spacing: 0.02em;
color: ${p=>p.theme.colors.black};
`;

export const ContentAuthor = styled.p`
margin: 0;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
`;

export const CreatedAuthor = styled.p`
margin-top: 10px;
font-weight: 500;
font-size: 18px;
line-height: 1.5;
letter-spacing: 0.02em;
`;