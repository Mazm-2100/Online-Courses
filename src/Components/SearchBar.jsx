
import { CiSearch } from "react-icons/ci";


export default function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <div className=" flex justify-center lg:justify-start items-center  w-full md:w-80/100 lg:w-1/3">
      <div className="relative w-3/4  flex items-center   text-2xl">

      <CiSearch className="absolute left-[15px] top-[8px] z-40 text-2xl" />

      <input
        className="input input-primary bg-white rounded-3xl w-full  px-12 "
        type="search"
        placeholder="Search courses by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
    </div>
  );
}
