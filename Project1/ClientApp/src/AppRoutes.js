import Home from "./components/Home";
import FAQ from "./components/Faq";
import Clasificacion from './components/Clasificacion'

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
  }
];

export default AppRoutes;
