
export default function VolumnBar() {
  return (
<div className="w-full bg-[#191B1F] sm:h-[5%] rounded-xl flex flex-row justify-start items-center">
  <h1 className="text-gray-300  text-lg ml-4 font-normal">Volumn 24H: <span className="text-white font-bold">$860.60m</span> <span className="text-red-500"> 
    {/* arrow down  */}
    ↓ 89.7%
    
  
    </span></h1>
     <h1 className="text-gray-300  text-lg ml-4 font-normal">Fees 24H: <span className="text-white font-bold">$860.60m</span> <span className="text-red-500"> 
    {/* arrow down  */}
    ↓ 89.7%
    
  
    </span></h1>
     <h1 className="text-gray-300  text-lg ml-4 font-normal">TVL: <span className="text-white font-bold">$860.60m</span> <span className="text-green-300"> 
    {/* arrow down  */}
    ↑ 9.7%
    
  
    </span></h1>
</div>
  )
}
