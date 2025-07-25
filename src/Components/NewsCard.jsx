import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const NewsCard = ({ news }) => {
  const { _id, title, author, image_url, details, total_view, rating, others_info } =
    news;

  return (
    <div className="">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
        {/* Image */}
        <img src={image_url} alt={title} className="w-full h-60 object-cover" />

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          {/* Author Info */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-700">{author?.name}</p>
              <p className="text-xs">{author?.published_date}</p>
            </div>
          </div>

          {/* Details Preview */}
          <p className="text-gray-600 text-sm">
            {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          </p>
          <NavLink to={`/news/${_id}`} className="text-blue-500 hover:text-blue-800 inline cursor-pointer">read more</NavLink>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-gray-200">
            <div className="flex items-center gap-1">
              <FaEye className="text-blue-500" />
              <span>{total_view}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>
                {rating?.number} ({rating?.badge})
              </span>
            </div>
            {others_info?.is_trending && (
              <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">
                Trending
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
