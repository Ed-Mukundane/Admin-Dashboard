/** @format */

import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/pages/home/Home.jsx";

function App() {
	return (
		<div className="App">
			<Topbar />
			<div className="container">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}

export default App;
