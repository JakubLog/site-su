import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: { color: { primary: string; secondary: string } } }>`
    html {
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.color.primary};
        background-color: ${({ theme }) => theme.color.secondary};
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
`;
