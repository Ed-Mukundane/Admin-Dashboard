/** @format */

import "./WidgetLarge.css";

export default function WidgetLarge() {
	const Button = ({ type }) => {
		return <button className={"widgetLargeButton " + type}>{type}</button>;
	};
	return (
		<div className="widgetLarge">
			<h3 className="widgetLargeTitle">Latest Transactions</h3>
			<table className="widgetLargeTable">
				<tr className="widgetLargeTr">
					<th className="widgerLargeTh">Customer</th>
					<th className="widgerLargeTh">Date</th>
					<th className="widgerLargeTh">Amount</th>
					<th className="widgerLargeTh">Status</th>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img src="./assets/user2.jpg" alt="" className="widgetLargeImg" />
						<span className="widgetLargeUsername">Bandese Chris</span>
					</td>
					<td className="widgetLargeDate">2 Jun 2021</td>
					<td className="widgetLargeAmount">Ugx.672,000</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>

				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img src="./assets/user2.jpg" alt="" className="widgetLargeImg" />
						<span className="widgetLargeUsername">Bandese Chris</span>
					</td>
					<td className="widgetLargeDate">2 Jun 2021</td>
					<td className="widgetLargeAmount">Ugx.672,000</td>
					<td className="widgetLargeStatus">
						<Button type="Declined" />
					</td>
				</tr>

				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img src="./assets/user2.jpg" alt="" className="widgetLargeImg" />
						<span className="widgetLargeUsername">Bandese Chris</span>
					</td>
					<td className="widgetLargeDate">2 Jun 2021</td>
					<td className="widgetLargeAmount">Ugx.672,000</td>
					<td className="widgetLargeStatus">
						<Button type="Pending" />
					</td>
				</tr>

				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img src="./assets/user2.jpg" alt="" className="widgetLargeImg" />
						<span className="widgetLargeUsername">Bandese Chris</span>
					</td>
					<td className="widgetLargeDate">2 Jun 2021</td>
					<td className="widgetLargeAmount">Ugx.672,000</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>

				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img src="./assets/user2.jpg" alt="" className="widgetLargeImg" />
						<span className="widgetLargeUsername">Bandese Chris</span>
					</td>
					<td className="widgetLargeDate">2 Jun 2021</td>
					<td className="widgetLargeAmount">Ugx.672,000</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
}
