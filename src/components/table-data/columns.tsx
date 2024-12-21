import { ColumnDef } from "@tanstack/react-table";

export type Stock = {
  ticket: string;
  price: string;
  change_amount: string;
  change_percent: string;
  volume: string;
  data? :{ time: string, price: number}[]
};

export const columns: ColumnDef<Stock>[] = [
  {
    header: "#",
    cell: ({ row }) => <div className="text-left">{row.index + 1}</div>,
    accessorKey: "id",
  },
{
    header: "Ticker",
    accessorKey: "ticket",
    cell: ({ row }) => <div className="text-left font-bold">{row.getValue("ticket")}</div>,
  },
   {
    header: () => <div className="text-right">Price</div>,
    accessorKey: "price",
    cell: ({ row }) => (
      <div className="text-right">
        ${parseFloat(row.getValue("price")).toFixed(2)}
      </div>
    ),
  },
  {
    header: ()=> <div className="text-right">Price Change</div>,
    cell: ({ row }) => {
  const changePercent = row.getValue("change_amount");

  const isPositive = (changePercent as string).startsWith("+");
  const isNegative = (changePercent as string).startsWith("-");

  const arrow = isPositive ? "↑" : isNegative ? "↓" : "";
  const textColor = isPositive ? "text-green-500" : isNegative ? "text-red-500" : "text-gray-900";

  return (
    <div className={`text-right font-medium ${textColor}`}>
      {arrow} {changePercent as string} %
    </div>
  );
},
    accessorKey: "change_amount",
},
{
  header: () => <div className="text-right">Volume</div>,
  cell: ({ row }) => {
const volume = row.getValue("volume");

const formatVolume = (volume: string) => {
  const number = parseInt(volume.replace(/[^0-9.-]+/g, ""), 10); 
  let formattedVolume: string | number = number;

  if (number >= 1_000_000_000) {
    formattedVolume = (number / 1_000_000_000).toFixed(1) + 'B'; 
  } else if (number >= 1_000_000) {
    formattedVolume = (number / 1_000_000).toFixed(1) + 'M'; 
  } else if (number >= 1_000) {
    formattedVolume = (number / 1_000).toFixed(1) + 'K'; 
  }

  return (
    <h1 className="text-right font-medium">
      {formattedVolume}
    </h1>
  ); 
};

return (
  <div className="text-right font-medium">
    {formatVolume(volume as string)}
  </div>
);
},
  accessorKey: "volume",
},
  {
    header: () => <div className="text-right">Change %</div>,
    accessorKey: "change_percent",
    cell: ({ row }) => {
      const isPositive = (row.getValue("change_percent") as string).startsWith("+");
      return (
        <div className={`text-right ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {row.getValue("change_percent")}
        </div>
      );
    },
  },
];
