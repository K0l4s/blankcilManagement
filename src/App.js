import { Route, Routes } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<p>Hi</p>}/>
        </Routes>
    </div>
  );
}

export default App;
