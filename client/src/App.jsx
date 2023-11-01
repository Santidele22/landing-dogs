import { Routes, Route } from "react-router-dom";
// Componentes
import Home from "./pages/home/home";
import GlobalStyles from "./theme/globalStyled";
import Theme from "./theme/theme";
import Landing from "./pages/landing/landing";


function App() {


  return (
    <>
      <Theme>
        <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={<Home url={"../src/assets/videos/bg.mp4"} />}
        />
        <Route path="/landing" element={<Landing/>} />
      </Routes>
      </Theme>
    
    </>
  );
}

export default App;
