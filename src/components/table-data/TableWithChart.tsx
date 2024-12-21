import React, { useState } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { columns, Stock } from "./columns";
import TestChart1 from "../chart/TestChart1";
import TestChart2 from "../chart/TestChart2";
import VolumnBar from "../volumn/VolumnBar";


export default function TableWithChart({ data }: { data: Stock[] }) {
  const [selectedStockData, setSelectedStockData] = useState<Stock | null>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(selectedStockData?.ticket);


  return (
    <>
    <div className="flex flex-row justify-between  items-center h-[500px] space-x-4">
 {selectedStockData ? (
    <>
    
    <div className="flex-grow basis-0 rounded-xl flex items-center bg-[#191B1F] h-full">

        <TestChart1 data={selectedStockData} />
    </div>
    <div className="flex-grow basis-0 rounded-xl flex items-center bg-[#191B1F] h-full">

        <TestChart2 data={selectedStockData} />
    </div>
    </>
    
        ) : (
          <p className="text-white">Select a stock to view its chart</p>
        )}
    </div>

        <VolumnBar />
      <h1>Top Tokens</h1>
    <div className="flex flex-col gap-6">
      {/* Table */}
      <div className="bg-[#191B1F] rounded-xl overflow-hidden">
        <table className="w-full text-white">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-2 px-4 text-left">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => setSelectedStockData(row.original)}
                className="cursor-pointer hover:bg-gray-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
    </>
  );
}
