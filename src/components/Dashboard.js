import { waveBackgroundStyle } from "../utils/constants";
import Header from "./Header";
import OttCard from "./OttCard";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen px-44 py-4 items-center"
        style={waveBackgroundStyle}
      >
        <ul className="flex flex-wrap list-none space-x-8">
          <li>
            <OttCard title={"Amazon Prime"} />
          </li>
          <li>
            <OttCard title={"Netflix"} />
          </li>
          <li>
            <OttCard title={"Sony Liv"} />
          </li>
          <li>
            <OttCard title={"Disney+ Hotstar"} />
          </li>
          <li>
            <OttCard title={"Zee5"} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
