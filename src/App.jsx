import { BrowserRouter} from "react-router-dom";
import Routing from "./route/index.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
  );
};

export default App;
