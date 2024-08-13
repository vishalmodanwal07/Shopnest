import React from 'react';
import { IoHeartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LikedItem from '../LikedItem';

function Favourite() {
  const { like } = useSelector((state) => state);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <div className="flex flex-col items-center gap-4 mb-8 p-4">
        <div className="flex items-center justify-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold bg-white dark:bg-gray-800 p-4">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 bg-white dark:bg-gray-800"
          style={{ fontFamily: '"Shadows Into Light", cursive' }}>
            <span className="text-green-500">Your</span>
            <span className="bg-white dark:bg-gray-800 text-black dark:text-white">Favourites</span>
            <IoHeartSharp className='text-red-600 text-3xl sm:text-4xl md:text-5xl animate-bounce' />
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {like.length > 0 ? (
          <div className="flex flex-col items-center gap-4">
            {like.map((item, index) => (
              <LikedItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-4 rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_20px_30px] text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
              <p className="font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: '"Raleway", sans-serif' }}>
                No Liked Products. Keep exploring the Home Page.
              </p>
            </div>
            <Link to={"/"}>
              <button
                type="button"
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                HOME
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourite;
