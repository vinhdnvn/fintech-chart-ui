import { ColumnDef } from "@tanstack/react-table";

export type Stock = {
  ticket: string;
  price: string;
  change_amount: string;
  change_percent: string;
  volume: string;
};

export const columns: ColumnDef<Stock>[] = [
  {
    header: () => <div className="text-left ">Name</div>,
   cell: ({ row }) => {
        const ticket = row.getValue("ticket");
    
        return <div className="text-left font-medium w-[280px]">{ticket as string}</div>;
        },
    accessorKey: "ticket",
  },
  {
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      const formattedPrice = (price / 1000).toFixed(2); 

      return <div className=" font-medium text-right">${formattedPrice}k</div>;
    },
    accessorKey: "price",
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
    header: () => <div className="text-right">Change Global</div>,
    accessorKey: "change_percent",
    cell: ({ row }) => {
        const changePercent = row.getValue("change_percent");
    
        const isPositive = (changePercent as string).startsWith("+");
        const isNegative = (changePercent as string).startsWith("-");
    
        const arrow = isPositive ? "↑" : isNegative ? "↓" : "";
        const textColor = isPositive ? "text-green-500" : isNegative ? "text-red-500" : "text-gray-900";
    
        return (
            <div className={`text-right font-medium ${textColor}`}>
            {arrow} {changePercent as string}
            </div>
        );
        }
  },
];
