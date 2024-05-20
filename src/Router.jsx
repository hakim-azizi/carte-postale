import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import FaceAvant from "./pages/FaceAvant";
import FaceArriere from "./pages/FaceArriere";
import Visualisation from "./pages/Visualisation";
import ECurency from "./pages/ECurency";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "face-avant",
                element: <FaceAvant />,
            },
            {
                path: "face-arriere",
                element: <FaceArriere />,
            },
            {
                path: "visualisation",
                element: <Visualisation />,
            },
            {
                path: "e-curency",
                element: <ECurency />,
            },
            {
                path: "confirmation",
                element: <Confirmation />,
            },
        ],
        errorElement: <h1>{"Oupsi, je crois qu'il y a une petite erreur !"}</h1>,
    },
]);

export default router;
