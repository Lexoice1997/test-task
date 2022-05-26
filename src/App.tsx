import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routs from "./routs/Routs";
import { setupStore } from "./store/store";

const store = setupStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routs />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
