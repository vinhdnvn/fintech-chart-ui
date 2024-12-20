import { useEffect, useState } from "react";
import { Stock } from "../table-data/columns";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, LineChart, Line } from "recharts";

import { type ChartConfig } from "../ui/chart";
import { Monitor, Phone } from "lucide-react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    color: "#2563eb",
    // theme:{
    //     light:{
    //         color: "#2563eb",
    //         icon: Monitor,
    //     },
    //     dark:{
    //         color: "#60a5fa",
    //         icon: Monitor,
    //     }
    // }
  },
  mobile: {
    label: "Mobile",
    icon:Phone,
    color: "#FC077D",
  },
} satisfies ChartConfig

// async function getData(): Promise<Stock[]> {
//   return [
//     {
//       ticket: "AAPL",
//       price: "150.75",
//       change_amount: "+2.15",
//       change_percent: "+1.45%",
//       volume: "89,000",
//     },
//     {
//       ticket: "GOOGL",
//       price: "2800.50",
//       change_amount: "-12.35",
//       change_percent: "-0.44%",
//       volume: "45,000",
//     },
//     {
//       ticket: "MSFT",
//       price: "299.20",
//       change_amount: "+1.00",
//       change_percent: "+0.33%",
//       volume: "65,000",
//     },
//   ];
// }

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

export default function TestChart() {
//   const [data, setData] = useState<Stock[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const fetchedData = await getData();
//       setData(fetchedData);
//     }
//     fetchData();
//   }, []);

  return (
   <div className="flex flex-col w-full">
  <div className="mb-2 mx-5">
    <h1 className="text-gray-300 text-xl font-bold opacity-25">Line Chart</h1>
    <p className="text-4xl font-semibold">$5.32b</p>
  </div>

  <div className="flex justify-center">
    <ChartContainer config={chartConfig} className="min-h-[250px] w-[85%]">
      <LineChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent labelKey="visitors" nameKey="browser" />} />
        {/* <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} /> */}
        <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  </div>
</div>

  );
}
