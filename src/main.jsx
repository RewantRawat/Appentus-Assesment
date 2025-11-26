import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import AllTools from "./Pages/AllTools.jsx";
import Layout from "./Layout/Layout.jsx";
import DnsLookup from "./Pages/DnsLookup.jsx";
import Publicdnslist from "./Pages/Publicdnslist.jsx";
import GetAndroidApp from "./Pages/GetAndroidApp.jsx";
import GetExtension from "./Pages/GetExtension.jsx";
import { ServersProvider } from "./Context/ServerContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <App /> },
			{ path: "alltools", element: <AllTools /> },
			{ path: "dnslookup", element: <DnsLookup /> },
			{ path: "publicdnslist", element: <Publicdnslist /> },
			{ path: "getandroidapp", element: <GetAndroidApp /> },
			{ path: "getextension", element: <GetExtension /> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ServersProvider>
			<RouterProvider router={router} />
		</ServersProvider>
	</StrictMode>,
);
