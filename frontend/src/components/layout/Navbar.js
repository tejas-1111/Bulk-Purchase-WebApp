import React, { Component } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
	}
	handleClick(event) {
		event.preventDefault();
		ls.set("auth", "false");
		ls.set("usertype", "");
		ls.set("email", "");
		window.location = "/";
	}

	onSubmit = e => {
		event.preventDefault();
		ls.set("search", this.state.search);
		window.location = "/searchresult";
	};

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						{ls.get("usertype") === "Vendor" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/addproduct">
									Add Product
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Vendor" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/viewproducts">
									List Products
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Vendor" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/dispatch">
									Ready To Dispatch
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Vendor" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/dispatched">
									Dispatched Products
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Vendor" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/seerating">
									See Ratings
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Customer" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/myorders">
									My Orders
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Customer" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/ratevendor">
									Rate Vendor
								</Link>
							</li>
						) : null}
						{ls.get("usertype") === "Customer" ? (
							<li className="nav-item">
								<Link className="nav-link" to="/rate">
									Rating & Reviews
								</Link>
							</li>
						) : null}
						{ls.get("auth") === "true" ? (
							<li className="nav-link">
								<Link
									className="nav-link"
									to="#"
									onClick={this.handleClick}
								>
									LogOut
								</Link>
							</li>
						) : null}
					</ul>
					{ls.get("usertype") === "Customer" ? (
						<ul>
							<form
								className="form-inline my-2 my-lg-0"
								onSubmit={this.onSubmit}
							>
								<input
									style={{ width: 300 }}
									className="form-control mr-sm-2"
									type="search"
									placeholder="Search Products"
									onChange={this.onChange}
									value={this.state.search}
									id="search"
									aria-label="Search"
								></input>
								<button
									className="btn btn-outline-success my-2 my-sm-0"
									type="submit"
								>
									Search
								</button>
							</form>
						</ul>
					) : null}
				</div>
			</nav>
		);
	}
}
export default Navbar;
