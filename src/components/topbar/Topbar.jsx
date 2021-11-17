import "./Topbar.css"
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
    return (
			<div className="topbar">
				<div className="topbarWrapper">
					<div className="topLeft">
						<span className="logo">ed.admin</span>
					</div>
					<div className="topRight">
						<div className="topbarIconContainer">
							<NotificationsNone />
							<span className="topbarIconBadge">2</span>
						</div>

						<div className="topbarIconContainer">
							<Language />
							<span className="topbarIconBadge">2</span>
						</div>

						<div className="topbarIconContainer">
							<Settings />
						</div>

                        <img src="./assets/profilePic.jpg" alt="" className="topbarAvatar" />
					</div>
				</div>
			</div>
		);
}
