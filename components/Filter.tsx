"use client"
function Filter() {
  return (
    <>
        
        <div className="brand-filter flex p-4 bg-gray-100 rounded-md shadow-md w-full sm:w-64">
     

      <select
        className="w-full border p-2 rounded-md"
        
      >
        <option value="">All Brands</option>
        <option value="Adidas">Adidas</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Reebok">Reebok</option>
        {/* Add more brands if needed */}
      </select>
      <h2 className="text-xl font-semibold mb-4">Filter by Brand</h2>
    </div>
        

    </>
  )
}

export default Filter