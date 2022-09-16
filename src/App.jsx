import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConversorView from "./views/conversor";
import ColorPickerView from "./views/color_picker";
import HomeView from "./views/home";
import ErrorView from "./views/error"


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path={"/"} element={<HomeView/>}/>
            
          <Route exact path={"/conversor"} element={<ConversorView/>}/>
            
          <Route exact path={"/color_picker"} element={<ColorPickerView/>}/>

          <Route path={"*"} element={<ErrorView/>}/>
            
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
