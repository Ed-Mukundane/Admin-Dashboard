import Chart from "../../chart/Chart.jsx"
import FeaturedInfo from "../../featuredInfo/FeaturedInfo.jsx"
import "./Home.css"
import { userData } from "../../../dummyData.js"
import WidgetSmall from "../../widgetSmall/WidgetSmall.jsx"
import WidgetLarge from "../../widgetLarge/WidgetLarge.jsx"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
