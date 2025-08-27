
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";
import Home from './pages/Home'

function App() {
 

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;