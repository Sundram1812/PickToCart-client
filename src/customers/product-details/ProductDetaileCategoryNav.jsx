import React from "react";

function ProductDetaileCategoryNav({catName}) {
  return (
    <div>
      <li >
        <div className="flex items-center">
          <a
            href={"#"}
            className="mr-2 text-sm font-medium text-gray-900"
          >
            {catName}
          </a>
          <svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-4 text-gray-300"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>
    </div>
  );
}

export default ProductDetaileCategoryNav;
