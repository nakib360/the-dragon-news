import React from "react";
import { useLoaderData } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <p className="font-semibold">Dragon news home</p>
      <div className="space-y-5">
        {
            data.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
