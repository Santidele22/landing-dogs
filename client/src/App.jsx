import { Routes, Route } from "react-router-dom";
// Componentes
import Home from "./pages/home/home";
import GlobalStyles from "./theme/globalStyled";
import Theme from "./theme/theme";
import Landing from "./pages/landing/landing";
import DetailsRendering from "./components/card-details/detailsRendering";
import Form from "./components/form/form";

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
        <Route path="/form" element={<Form />}/>
        
        <Route path="/details/:id" element={<DetailsRendering/>}/>
      </Routes>
      </Theme>
    
    </>
  );
}

export default App;
