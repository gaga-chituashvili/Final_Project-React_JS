import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h6 className="text-xl font-semibold text-gray-800">
          {data.productTitle}
        </h6>
        <p className="text-sm text-gray-600 mt-1">{data.productStatus}</p>
        <p className="text-gray-700 mt-4">
          {data.description.shortDescription}
        </p>

        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-500">
            Size Chart: {data.styleGuide.sizeChartText}
          </p>
          <p className="text-sm text-gray-500">Tax Code: {data.taxCode}</p>
          <p className="text-sm text-gray-500">Ratings: {data.ratingCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
