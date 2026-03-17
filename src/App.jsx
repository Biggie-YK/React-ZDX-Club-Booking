import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
