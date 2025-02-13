"use client";
import {useSearch} from "@/context/SearchContext"
function Filter() {

  const {selectedBrand, setSelectedBrand} = useSearch()
  return (
    <div className="mt-5  sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-between p-2 bg-[#FFF9EB] rounded-md shadow-md">
      <select className="rounded-md bg-[#FFF9EB] p-2 border"
      value={selectedBrand}
      onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        <option value="Adidas">Adidas</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Reebok">Reebok</option>
        <option value="Asics">Asics</option>
        <option value="New Balance">New Balance</option>
        <option value="Saucony">Saucony</option> 
      </select>
      <h2 className="text-lg font-semibold">Filter by Brand</h2>
    </div>
  );
}

export default Filter;
