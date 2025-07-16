import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-3 cursor-pointer">
      {/* Previous Button */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        ‹
      </p>

      {/* Page 1 - Active */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#5932EA] text-white hover:bg-gray-100 rounded-md transition-colors">
        1
      </p>

      {/* Page 2 */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        2
      </p>

      {/* Page 3 */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        3
      </p>

      {/* Page 4 */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        4
      </p>

      {/* Ellipsis */}
      <span className="w-6 h-6 flex items-center justify-center text-gray-500  hover:bg-gray-100 rounded-md transition-colors">
        ...
      </span>

      {/* Page 40 */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        40
      </p>

      {/* Next p */}
      <p className="w-6 h-6 flex items-center justify-center bg-[#f5f5f5] text-gray-500 border-2 border-[#eeeeee] hover:bg-gray-100 rounded-md transition-colors">
        ›
      </p>
    </div>
  );
};

export default Pagination;