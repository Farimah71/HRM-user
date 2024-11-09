import MyRoutes from "./routes/index";
import { ToastContainer } from "react-toastify";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <>
      <ToastContainer />
      <MyRoutes />
    </>
  );
}

export default App;
