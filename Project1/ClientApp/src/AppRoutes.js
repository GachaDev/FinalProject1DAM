import Home from "./components/Home/Home";
import FAQ from "./components/Faq";
import Clasificacion from './components/Clasificacion'
import Player1213 from "./components/Player12&13";

const AppRoutes = [
  {
    index: true,
    path: "/",
    element: <Home />
  },
  {
    path: "/FAQ",
    element: <FAQ />
  },
  {
    path: "/clasificacion",
    element: <Clasificacion />
  },
  {
    path:"/Player12&13",
    element: <Player1213/>
  }
];

export default AppRoutes;
