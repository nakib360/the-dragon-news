import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNevber = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <p className="font-semibold">All Categories</p>
      <div className="flex flex-col gap-3 my-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className={({ isActive }) =>
              `${
                isActive ? "bg-gray-400 border-gray-400" : "bg-gray-100 border-gray-100"
              } btn bg-gray-100  text-black`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNevber;
