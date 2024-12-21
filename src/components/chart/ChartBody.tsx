import { FirstStock } from "./items/FirstStock";
import TestChart1 from "./TestChart1";
import TestChart2 from "./TestChart2";



export default function ChartBody() {

  return (
    <div className="flex flex-row justify-between  items-center h-[500px] space-x-4">
      {/* Chart 1 */}
      <div className="flex-grow basis-0 rounded-xl flex items-center bg-[#191B1F] h-full">
         {/* <FirstStock /> */}
         {/* <TestChart1 /> */}
      </div>

      {/* Chart 2 */}
      <div className="flex-grow basis-0 rounded-xl flex items-center bg-[#191B1F] h-full">
      {/* <TestChart2 /> */}
      </div>
    </div>
  );
}
