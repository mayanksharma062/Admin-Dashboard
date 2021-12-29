import DrawerPage from "./pages/DrawerPage";
import { ThemeProvider, createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

import { BrowserRouter as Router } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  primary: {
    main: yellow,
  },
});

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <DrawerPage />
          {/* <DrawerPageRecursion /> */}
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
