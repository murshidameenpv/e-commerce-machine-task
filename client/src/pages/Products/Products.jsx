import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // console.log(selectedCategory,"ppppppppppppppp");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        
        // console.log(data);
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);
  //Filter data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  //Show all products
  const showAllProducts = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
    setCurrentPage(1);
  };
  //Sorting based on A -Z,Z-A,pricing
  const handleSorting = (option) => {
    setSortOption(option);
    //Dont mutate original array so i created a copy of the array using ... spread  ( arrays are reference types)
    let sortedItems = [...filteredItems];
    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };
  //pagination logic
  //each page, you calculate the indices of the first and last items on that page. This is done with these lines of code :-
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {/* Product bannar */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col justify-center items-center gap-8">
          {/* texts */}
          <div className="space-y-7 px-5 text-center">
            <h2 className="md:text-5xl font-bold text-4xl md:leading-snug leading-snug">
              Radiate Elegance with Handcrafted Jewelry.
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Each piece tells a story. From delicate necklaces to statement
              rings, our jewelry is a testament to craftsmanship.
            </p>
            <button className="btn bg-green text-white px-3 py-3 rounded-full font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* Products  shop section */}
      <div className="section-container">
        {/* filtering and Sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between mb-8 items-center space-y-3">
          {/* all category btn  */}
          <div className="flex flex-row ml-6  items-start md:items-center  md:gap-8 gap-4 flex-wrap">
            <button
              onClick={showAllProducts}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("men's clothing")}
              className={selectedCategory === "men's clothing" ? "active" : ""}
            >
              Men&apos;s clothing
            </button>
            <button
              onClick={() => filterItems("jewelery")}
              className={selectedCategory === "jewelery" ? "active" : ""}
            >
              Jewelery
            </button>
            <button
              onClick={() => filterItems("electronics")}
              className={selectedCategory === "electronics" ? "active" : ""}
            >
              Electronics
            </button>
            <button
              onClick={() => filterItems("women's clothing")}
              className={
                selectedCategory === "women's clothing" ? "active" : ""
              }
            >
              Women&apos;s clothing
            </button>
          </div>
          {/* Sorting */}
          <div className="flex justify-end">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>
            {/* sorting options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSorting(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-1 text-center text-sm  rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
              <option value="low-to-high">Low - High</option>
              <option value="high-to-low">High - Low</option>
            </select>
          </div>
        </div>
        {/* product cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItem.map((item, index) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* paginaton  */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
