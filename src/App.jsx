/** @format */

import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/pages/home/Home.jsx";
import UserList from "./components/pages/userList/UserList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/pages/user/User.jsx";
import NewUser from "./components/pages/newUser/NewUser.jsx";
import ProductList from "./components/pages/productList/ProductList.jsx";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
	return (
		<div className="App">
			<Topbar />
			<div className="container">
				<Router>
					<Sidebar />
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="users" element={<UserList />} />
						<Route path="user/:userId" element={<User />} />
						<Route path="newUser" element={<NewUser />} />
						<Route path="products" element={<ProductList />} />
						<Route path="product/:productId" element={<Product />} />
						<Route path="newProduct" element={<NewProduct />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
