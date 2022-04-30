import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "./reset.css";

import App from "./components/screens/App/App";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./providers/AuthProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AuthProvider>
					<Router>
						<App />
					</Router>
				</AuthProvider>
			</Layout>
		</QueryClientProvider>
	</React.StrictMode>
);
