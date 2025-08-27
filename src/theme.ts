// theme.ts
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff", // --background
            paper: "#fafafa",   // --card
        },
        text: {
            primary: "#333333", // --foreground
            secondary: "#737373", // --muted-foreground
        },
        primary: {
            main: "#6c15d5",     // --primary (roxinho Konectaí)
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#FF8e38",     // --secondary (laranja acento)
            contrastText: "#ffffff",
        },
        error: {
            main: "#D64545",     // --destructive
            contrastText: "#ffffff",
        },
        divider: "#e6e6e6",    // --border
    },
    shape: {
        borderRadius: 8, // 0.5rem
    },
    typography: {
        fontFamily: "'Noto Sans', sans-serif",
        h1: { fontWeight: 700, fontSize: "3rem" },
        h2: { fontWeight: 700, fontSize: "2.25rem" },
        h3: { fontWeight: 600, fontSize: "1.75rem" },
        body1: { fontWeight: 400, fontSize: "1rem" },
        button: { textTransform: "none", fontWeight: 500 },
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#333333", // cor padrão pros ícones
                },
            },
        },
    },
});

// Dark Theme
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1A1A1A", // --background
            paper: "#262626",   // --card
        },
        text: {
            primary: "#F2F2F2", // --foreground
            secondary: "#A3A3A3", // --muted-foreground
        },
        primary: {
            main: "#8C66FF",     // --primary (versão mais clara do roxo)
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#FFB366",     // --secondary (laranja mais claro no dark)
            contrastText: "#1A1A1A",
        },
        error: {
            main: "#B3261E",     // --destructive dark
            contrastText: "#F2F2F2",
        },
        divider: "#333333",    // --border
    },
    shape: {
        borderRadius: 8,
    },
});
