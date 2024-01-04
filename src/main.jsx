import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.css";
import { App } from "./pages/App";
import { Media } from "./pages/Media";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/series",
		element: <Media content='series' />,
	},
	{
		path: "/movies",
		element: <Media content='movie'  />,
	},
]);

const root = createRoot(document.getElementById("app"));

root.render(<RouterProvider router={router} />);
