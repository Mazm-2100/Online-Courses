export default function SortMenu({ sortType, setSortType }) {
  return (
    <div className="w-80/100 md:w-1/2 lg:w-1/4  ">
      <div className="flex gap-2 items-center justify-center lg:flex-wrap">
        <h1 className="text-gray-600">Sort by</h1>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="select  bg-gray-100  text-gray-700 font-semibold w-2/3 lg:w-3/4  rounded-3xl px-4 border-gray-600 p-2 "
        >
          <option value="default" className="font-normal">
            Default
          </option>
          <option value="price_desc" className="font-normal">
            Price: High to Low
          </option>
          <option value="price_asc" className="font-normal">
            Price: Low to High
          </option>
        </select>
      </div>
    </div>
  );
}
