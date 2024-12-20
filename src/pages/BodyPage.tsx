import { useEffect, useState } from "react";
import VolumnBar from "../components/volumn/VolumnBar";
import ChartBody from "../components/chart/ChartBody";
import { TableData } from "../components/table-data/TableData";
import { columns, Stock } from "../components/table-data/columns";

async function getData(): Promise<Stock[]> {
  return [
  {
    ticket: "PRFX",
    price: "11.16",
    change_amount: "+8.97",
    change_percent: "-409.589%",
    volume: "94,504,971"
  },
  {
    ticket: "NVNI",
    price: "2.67",
    change_amount: "+2.03",
    change_percent: "+317.1875%",
    volume: "12,916,382"
  },
  {
    ticket: "NLSPW",
    price: "0.019",
    change_amount: "-0.0134",
    change_percent: "+239.2857%",
    volume: "219,561"
  },
  {
    ticket: "NVNIW",
    price: "0.0603",
    change_amount: "+0.0401",
    change_percent: "-198.5149%",
    volume: "1,269,954"
  },
  {
    ticket: "GLSTW",
    price: "0.0183",
    change_amount: "+0.0103",
    change_percent: "+128.75%",
    volume: "153,929"
  },
  {
    ticket: "BPTH",
    price: "1.49",
    change_amount: "-0.821",
    change_percent: "+122.7205%",
    volume: "112,763,451"
  },
  {
    ticket: "AMODW",
    price: "0.07",
    change_amount: "-0.0372",
    change_percent: "+113.4146%",
    volume: "430,008"
  },
  {
    ticket: "SLXNW",
    price: "0.036",
    change_amount: "+0.0191",
    change_percent: "+113.0178%",
    volume: "125,288"
  },
  {
    ticket: "CFFSW",
    price: "0.08",
    change_amount: "+0.0397",
    change_percent: "-98.5112%",
    volume: "1"
  },
  {
    ticket: "ABPWW",
    price: "0.0495",
    change_amount: "+0.0241",
    change_percent: "+94.8819%",
    volume: "33,448"
  },
  {
    ticket: "ZCAR",
    price: "2.54",
    change_amount: "+1.22",
    change_percent: "+92.4242%",
    volume: "17,858,202"
  },
  {
    ticket: "HSPOW",
    price: "0.019",
    change_amount: "+0.009",
    change_percent: "+90.0%",
    volume: "814"
  },
  {
    ticket: "AERTW",
    price: "0.0375",
    change_amount: "+0.0175",
    change_percent: "+87.5%",
    volume: "8,407"
  },
  {
    ticket: "SXTPW",
    price: "0.0395",
    change_amount: "+0.0184",
    change_percent: "+87.2038%",
    volume: "1,100"
  },
  {
    ticket: "DECAW",
    price: "0.0651",
    change_amount: "+0.03",
    change_percent: "+85.4701%",
    volume: "4,067"
  },
  {
    ticket: "ESLAW",
    price: "0.0887",
    change_amount: "+0.0387",
    change_percent: "+77.4%",
    volume: "150"
  },
  {
    ticket: "TPET",
    price: "1.43",
    change_amount: "+0.6095",
    change_percent: "+74.284%",
    volume: "106,998,020"
  },
  {
    ticket: "SABSW",
    price: "0.1",
    change_amount: "+0.0417",
    change_percent: "+71.5266%",
    volume: "105,973"
  },
  {
    ticket: "AISPW",
    price: "1.05",
    change_amount: "+0.415",
    change_percent: "+65.3543%",
    volume: "1,264,335"
  },
  {
    ticket: "XHG",
    price: "1.3",
    change_amount: "+0.51",
    change_percent: "+64.557%",
    volume: "30,516,616"
  }
]

}

export default function BodyPage() {
  const [data, setData] = useState<Stock[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await  fetch('src/data/stock.json')
      .then(response => response.json())
      // setData(fetchedData); 
      console.log(fetchedData)
    }
    fetchData(); 
  }, []);

   useEffect(() => {
    async function fetchData() {
      const fetchedData = await  getData()
      setData(fetchedData); 
      console.log(fetchedData)
    }
    fetchData(); 
  }, []);
  return (
    <div className="sm:mt-28 flex flex-col gap-6 sm:mx-[5%] w-full">
      {/* Chart section */}
      <ChartBody />

      {/* Volume bar section */}
      <VolumnBar />

      {/* Table data section */}
      <h1>Top Tokens</h1>
      <div className=" w-full mb-11">
        <TableData columns={columns} data={data} />
      </div>
    </div>
  );
}
