import React from 'react';

const News = () => {
    return (
        <div className="container">
            <div className="border-2 p-14 rounded-2xl mb-20">
             <div className="text-white flex justify-center flex-col items-center">
                 <h1 className="text-2xl">Subscribe to get the Latest News</h1>
                 <p className="p-5">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>

                 <form>
                     <label htmlFor="default-search"
                            className=" w-[100%]mb-2 text-sm font-medium text-gray-900 sr-only text-black">Enter your email addres</label>
                     <div className="relative">
                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                         </div>
                         <input type="search" id="default-search"
                                className="rounded-2xl block p-4 pl-80 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos..." required/>
                             <button type="submit"
                                     className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe
                             </button>
                     </div>
                 </form>

             </div>
            </div>
        </div>
    );
};

export default News;