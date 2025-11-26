import { useState, useEffect } from "react";
import { courses as initialCourses, categories } from "../data";

import Header from "../Components/Header";
import Section1 from "../Components/Section1";
import CourseCard from "../Components/CourseCard";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";
const ITEMS_PER_PAGE = 6;

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  let currentData = initialCourses;
  if (searchTerm) {
    currentData = currentData.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (activeTab !== "All") {
    currentData = currentData.filter((course) => course.category === activeTab);
  }
  if (sortType === "price_asc") {
    currentData.sort((a, b) => a.price - b.price);
  } else if (sortType === "price_desc") {
    currentData.sort((a, b) => b.price - a.price);
  }
  const totalResultsCount = currentData.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentCourses = currentData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalResultsCount / ITEMS_PER_PAGE);
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab, sortType]);

  return (
    <div className="w-full  flex flex-col gap-10 items-center">
      <Header />

      <Section1
        categories={categories}
        searchTerm={searchTerm}
        activeTab={activeTab}
        sortType={sortType}
        setSearchTerm={setSearchTerm}
        setActiveTab={setActiveTab}
        setSortType={setSortType}
      />

      <div className="container w-full md:w-95/100 lg:w-90/100 flex flex-col gap-5 mx-auto px-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Courses ({totalResultsCount} Results)
        </h1>
        {currentCourses.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-3">
            {currentCourses.map((course, index) => (
              <CourseCard key={course.id || index} el={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 text-lg">
            No courses found matching your criteria.
          </div>
        )}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
}
