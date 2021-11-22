/** @format */

import "./User.css";
import { 
	PermIdentity,
	CalendarToday,
	PhoneIphone,
	MailOutline,
	LocationSearching,
	Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img src="../assets/user1.jpg" alt="" className="userShowImg" />
						<div className="userShowTopTitle">
							<span className="userShowUsername">Edgar Ampiire</span>
							<span className="userShowUserTitle">Web Developer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">edgar990</span>
						</div>

						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">05.03.1998</span>
						</div>

						<span className="userShowTitle">Contact Details</span>

						<div className="userShowInfo">
							<PhoneIphone className="userShowIcon" />
							<span className="userShowInfoTitle">+256 701-234567</span>
						</div>

						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">example@gmail.com</span>
						</div>

						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">Kampala | Uganda</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form action="" className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="edgar990"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Edgar Ampiire"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="example@gmail.com"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+256 701-234567"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="Kampala | Uganda"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									className="userUpdateImg"
									src="../assets/user1.jpg"
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="userUpdateUploadIcon" />{" "}
								</label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
