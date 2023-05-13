import Home from "./components/Home";
import FAQ from "./components/Faq";

const AppRoutes = [
  {
    index: true,
    path: "/",
    element: <Home />
  },
  {
    path: "/FAQ",
    element: <FAQ />
  }
];

export default AppRoutes;
