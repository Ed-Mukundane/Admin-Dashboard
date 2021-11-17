import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
			<div className="featuredInfo">
				<div className="featuredItem">
					<span className="featuredTitle">Revenue</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">Ugx.3,000,000</span>
						<span className="featuredMoneyRate">
							-11.4
							<ArrowDownward className="featuredIcon negative" />
						</span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>

				<div className="featuredItem">
					<span className="featuredTitle">Sales</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">Ugx.15,000,000</span>
						<span className="featuredMoneyRate">
							-6.1
							<ArrowDownward className="featuredIcon negative" />
						</span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>

				<div className="featuredItem">
					<span className="featuredTitle">Cost</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">Ugx.6,000,000</span>
						<span className="featuredMoneyRate">
							+4.2
							<ArrowUpward className="featuredIcon" />
						</span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
			</div>
		);
}
