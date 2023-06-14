import Chart from "../components/Chart";
import Info from "../components/Info";
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { dataOfUsers } from "../exmapleData";
const Home = () => {
  return (
    <div className="home">
      <Info />
      <Chart
        data={dataOfUsers}
        title="User Analytics"
        dataKey="Active User"
        grid={true}
      />
      <div className="home__widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
