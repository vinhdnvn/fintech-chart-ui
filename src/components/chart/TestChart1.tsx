/* eslint-disable @typescript-eslint/no-explicit-any */




import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import { ChartContainer } from "../ui/chart";
import axios from "axios";



export default function TestChart1({ data }: { data: any }) {
  // Example chart data for the selected stock
  const [chartData, setChartData] = useState<{ time: string; price: number }[]>(
    []
  );

  console.log('in testchart1',data.ticket);


  useEffect(() => {
    const fetchData = async () => {
      // console.log(data.ticket);
      const response = await axios.get('https://67258096c39fedae05b4e75d.mockapi.io/fintech');
      const matchedItem = response.data.find(
        (item: any) => item["Meta Data"]["2. Symbol"] === data.ticket
      );


          if (matchedItem) {
        const timeSeries = matchedItem["Time Series (5min)"];
        const formattedData = Object.entries(timeSeries).map(
          ([timestamp, values]) => ({
            time: timestamp.split(" ")[1], 
            price: parseFloat(
              (values as { "4. close": string })["4. close"]
            ), // Closing price
          })
        );
      setChartData(formattedData);
          }
      else{
         console.warn(`No matching data found for ticket: ${data.ticket}`);
        setChartData([]); // Clear chart data if no match
      }
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

        <ChartContainer config={
          {
            price: {
              label: "Closing Price",
              color: "#EF4437",
            },
          }
        } className="min-h-[250px] w-[85%]">

        <LineChart  width={500} height={300} data={chartData}>

          <CartesianGrid vertical={false} />
            <XAxis
            dataKey="time"
            tickLine={false}
            tickFormatter={(time) => time.split(":")[1]} // Extract only the minutes
          />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
          </ChartContainer>
      </div>
    </div>
  );
}
