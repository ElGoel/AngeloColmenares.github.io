import { styled } from "@mui/material";

export const LinkStyled = styled('a')(({theme}) => `
    position: absolute;
    color: ${theme.palette.text.primary};
    text-decoration: none;
    font-weight: bold;
    &:hover {
        color: ${theme.palette.text.primary};
    }
    &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.palette.primary.main};
    transform: scaleX(0);
    transition: transform 0.3s ease;
    }
    &:hover::before {
    transform: scaleX(1);
    }
`);