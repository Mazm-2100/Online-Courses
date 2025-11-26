import SearchBar from "./SearchBar";
import SortMenu from "./SortMenu";
import Tabs from "./Tabs";
export default function Section1({
  categories,
  searchTerm,
  activeTab,
  sortType,
  setSearchTerm,
  setActiveTab,
  setSortType,
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container w-95/100 md:w-80/100 px-1 lg:px-4 py-6 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Tabs
            categories={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <SortMenu sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </div>
  );
}
