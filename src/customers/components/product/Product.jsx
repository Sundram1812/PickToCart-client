import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import { gounsPage1 } from "../../../data/gounsPage1";
import "./product.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Pagination, colors } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../../../state/product/Action";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹300", checked: false },
      { value: "399-999", label: "₹399 To ₹999", checked: false },
      { value: "999-1999", label: "₹999 To ₹1999", checked: false },
      { value: "1999-2999", label: "₹1999 To ₹2999", checked: false },
      { value: "2999-4999", label: "₹2999 To ₹4999", checked: false },
    ],
  },

  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and Above", checked: false },
      { value: "20", label: "20% and Above", checked: false },
      { value: "30", label: "30% and Above", checked: false },
      { value: "40", label: "40% and Above", checked: false },
      { value: "50", label: "50% and Above", checked: false },
      { value: "60", label: "60% and Above", checked: false },
      { value: "70", label: "70% and Above", checked: false },
      { value: "80", label: "80% and Above", checked: false },
    ],
  },

  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In stock", checked: false },
      { value: "out_of_stock", label: "Out of stock", checked: false },
    ],
  },
];

const checkBoxFilter = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      { value: "XL", label: "XL", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [url, setUrl] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const param = useParams();
  console.log(param.lavelTwo);
  const val = searchParam.toString().split("&");
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  console.log(product);

  function handleFilters(value, sectionId) {
    console.log(sectionId + " :" + value);
    const searchParam = new URLSearchParams(location.search);
    let filteredValue = searchParam.getAll(sectionId);
    console.log("filteredValue :" + filteredValue);

    if (
      filteredValue.length > 0 &&
      filteredValue[0].split(",").includes(value)
    ) {
      filteredValue = filteredValue[0]
        .split(",")
        .filter((item) => item !== value);

      if (filteredValue.length === 0) {
        searchParam.delete(sectionId);
      }
    } else {
      filteredValue.push(value);
    }

    if (filteredValue.length > 0) {
      searchParam.set(sectionId, filteredValue.join());
    }

    console.log("searchParam      :----------" + typeof sea);

    const query = searchParam.toString();
    navigate({ search: `?${query}` });
  }

  function handleRadioFilters(e, sectionId) {
    const searchParam = new URLSearchParams(location.search);
    searchParam.set(sectionId, e.target.value);
    const query = searchParam.toString();
    navigate({ search: `?${query}` });
  }

  // Getting velues from url:
  const decodeQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodeQueryString);
  const colorValue = searchParams.get("color");
  const priceValue = searchParams.get("price");
  const sizeValue = searchParams.get("size");
  const discount = searchParams.get("discount");
  const sort = searchParams.get("sort");
  const pageNumber = searchParam.get("page") || 1;
  const stock = searchParams.get("availability");

  console.log(
    colorValue +
      " " +
      priceValue +
      " " +
      sizeValue +
      " " +
      discount +
      " " +
      stock
  );

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);

    const data = {
      category: param.lavelThree,
      colors: colorValue || "",
      sizes: sizeValue,
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      sort: sort || "price_low",
      stock: stock || "in_stock",
      pageNumber: pageNumber - 1,
      pageSize: 10,
    };

    dispatch(findProduct(data));
  }, [
    param.lavelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sort,
    stock,
    pageNumber,
  ]);

  function handlePagination(e, value) {
    const searchParams = new URLSearchParams(location.search);
    searchParam.set("page", value);
    const query = searchParam.toString();
    navigate({ search: `?${query}` });
  }

  return (
    <div className="bg-gray-100">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500 rounded-md">
                                <span className="font-medium text-gray-900 pr-2">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center pl-2">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Normal display */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            {/* Sort DropDown */}
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-1000"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ focus }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className=" flex justify-center lg:justify-between">
              {/* SideBar Filters */}
              <form className="hidden lg:block basis-[20rem]">
                {/* <h3 className="sr-only">Categories</h3> */}
                <div className="flex justify-between items-center my-2 mb-3">
                  <p className="font-bold ">Filter</p>
                  <FilterListIcon className=" font-bold" />
                </div>

                {/* All CheckBox Filters  */}
                {checkBoxFilter.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-gray-100 py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>

                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>

                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  onChange={() =>
                                    handleFilters(option.value, section.id)
                                  }
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  // type="radio"
                                  // defaultChecked={option.checked}
                                  defaultChecked={
                                    colorValue?.includes(option.value) ||
                                    sizeValue?.includes(option.value) ||
                                    priceValue?.includes(option.value) ||
                                    discount?.includes(option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}

                {/* All Radio filters */}
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-gray-100 py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>

                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>

                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  onChange={(e) =>
                                    handleRadioFilters(e, section.id)
                                  }
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  //   defaultValue={val.includes(section.id) }
                                  // type="checkbox"
                                  type="radio"
                                  //   defaultChecked={option.checked}
                                  defaultChecked={
                                    val.includes(
                                      `${section.id}=${option.value}`
                                    )
                                      ? true
                                      : false
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Our Products */}
              <div
                id="product"
                className=" grid grid-cols-1 gap-2  col-span-3 "
              >
                {product?.products?.content?.map((item, key) => (
                  <ProductCard key={key} product={item} />
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="w-full px-[3.5rem] mb-5 flex justify-center">
              <Pagination
                count={product?.products.totalPages}
                color="primary"
                onChange={handlePagination}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
