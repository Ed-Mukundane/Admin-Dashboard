import "./WidgetSmall.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
    return (
			<div className="widgetSmall">
				<span className="widgetSmallTitle">New Join Member</span>
				<ul className="widgetSmallList">
					<li className="widgetSmallListItem">
						<img src="./assets/user1.jpg" alt="" className="widgetSmallImg" />
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Edgar Ampiire</span>
							<span className="widgetSmallUserJobTitle">Web Developer</span>
						</div>
						<button className="widgetSmallButton">
							<Visibility className="widgetSmallButtonIcon" />
							Display
						</button>
					</li>

					<li className="widgetSmallListItem">
						<img src="./assets/user1.jpg" alt="" className="widgetSmallImg" />
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Edgar Ampiire</span>
							<span className="widgetSmallUserJobTitle">Web Developer</span>
						</div>
						<button className="widgetSmallButton">
							<Visibility className="widgetSmallButtonIcon" />
							Display
						</button>
					</li>

					<li className="widgetSmallListItem">
						<img src="./assets/user1.jpg" alt="" className="widgetSmallImg" />
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Edgar Ampiire</span>
							<span className="widgetSmallUserJobTitle">Web Developer</span>
						</div>
						<button className="widgetSmallButton">
							<Visibility className="widgetSmallButtonIcon" />
							Display
						</button>
					</li>

					<li className="widgetSmallListItem">
						<img src="./assets/user1.jpg" alt="" className="widgetSmallImg" />
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Edgar Ampiire</span>
							<span className="widgetSmallUserJobTitle">Web Developer</span>
						</div>
						<button className="widgetSmallButton">
							<Visibility className="widgetSmallButtonIcon" />
							Display
						</button>
					</li>

					<li className="widgetSmallListItem">
						<img src="./assets/user1.jpg" alt="" className="widgetSmallImg" />
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Edgar Ampiire</span>
							<span className="widgetSmallUserJobTitle">Web Developer</span>
						</div>
						<button className="widgetSmallButton">
							<Visibility className="widgetSmallButtonIcon" />
							Display
						</button>
					</li>
				</ul>
			</div>
		);
}
