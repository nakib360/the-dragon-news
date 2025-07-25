import React from "react";
import Header from "../Components/Header";
import RightNevber from "../Components/Layout-componet/RightNevber";
import { useLoaderData } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data?.data?.[0];

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="grid grid-cols-12 gap-4 px-5 py-8">
        <section className="col-span-12 lg:col-span-9">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            {/* Thumbnail */}
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full rounded-xl mb-6"
            />
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {news.title}
            </h1>
            {/* Author & Published */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold">{news.author.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(news.author.published_date).toLocaleString()}
                </p>
              </div>
            </div>
            {/* Rating, Views, Tags */}
            <div className="flex flex-wrap gap-6 items-center mb-6 text-sm">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                ⭐ {news.rating.number} ({news.rating.badge})
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                👁️ {news.total_view} views
              </span>
              {news.others_info.is_todays_pick && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  ✅ Today's Pick
                </span>
              )}
              {news.others_info.is_trending && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  🔥 Trending
                </span>
              )}
            </div>
            {/* News Details */}
            <article className="text-lg leading-relaxed text-gray-700">
              {news.details}
            </article>
            {/* Back to Category Button */}
            <div className="flex">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
              >
                ← Back to Category
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <section className="col-span-12 lg:col-span-3">
          <RightNevber />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
