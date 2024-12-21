
import axios from "axios";
import { time } from "console";
// export default function TestChart() {
// //   const [data, setData] = useState<Stock[]>([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       const fetchedData = await getData();
// //       setData(fetchedData);
// //     }
// //     fetchData();
// //   }, []);

//   return (
//    <div className="flex flex-col w-full">
//   <div className="mb-2 mx-5">
//     <h1 className="text-gray-300 text-xl font-bold opacity-25">Line Chart</h1>
//     <p className="text-4xl font-semibold">$5.32b</p>
//   </div>

//   <div className="flex justify-center">
//     <ChartContainer config={chartConfig} className="min-h-[250px] w-[85%]">
//       <LineChart accessibilityLayer data={chartData}>
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           tickMargin={10}
//           axisLine={false}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         <ChartTooltip content={<ChartTooltipContent labelKey="visitors" nameKey="browser" />} />
//         {/* <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} /> */}
//         <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
//       </LineChart>
//     </ChartContainer>
//   </div>
// </div>

//   );
// }
import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, BarChart, Bar } from "recharts";
import { ChartContainer } from "../ui/chart";

interface TimeSeriesData {
  [timestamp: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

interface ApiResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (5min)": TimeSeriesData;
}


export default function TestChart1({ data }: { data: any }) {
  // Example chart data for the selected stock
  const [chartData, setChartData] = useState<{ time: string; price: number }[]>(
    []
  );

  // const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData>({});

  useEffect(() => {
    const fetchData = async () => {
      // console.log(data.ticket);
      const response = await axios.get('https://67258096c39fedae05b4e75d.mockapi.io/fintech');
        const timeSeries = response.data[0]["Time Series (5min)"];
        const formattedData = Object.entries(timeSeries).map(([timestamp, values]) => ({
        time: timestamp.split(" ")[1], // Only extract the time (e.g., 19:55:00)
        price: parseFloat((values as { "4. close": string })["4. close"]), // Closing price
      }));
      setChartData(formattedData);
      // console.log('Test Chart1',timeSeriesData);
    };
    fetchData();
  }, [data]);

  // console.log(data.ticket);

  return (
    <div className="flex flex-col w-full">
      <div className="mb-2 mx-5">
        <h1 className="text-gray-300 text-xl font-bold opacity-25">Line Chart</h1>
        <p className="text-4xl font-semibold">{data.ticket}</p>
      </div>

      <div className="flex justify-center">
        <ChartContainer config={{
            price: {
              label: "Closing Price",
              color: "#EF4437",
            },
          }}  className="min-h-[250px] w-[85%]">

        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid vertical={false} />
            <XAxis
            dataKey="time"
            tickLine={false}
            tickFormatter={(time) => time.split(":")[1]} // Extract only the minutes
          />
          <Tooltip />
          <Bar type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2}  />
        </BarChart>
          </ChartContainer>
      </div>
    </div>
  );
}
