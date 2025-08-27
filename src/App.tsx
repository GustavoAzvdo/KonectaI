import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Home from './pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;