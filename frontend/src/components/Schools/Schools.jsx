import React from "react";
import schoolLogo from "../../../public/images/schoolsImage.jpg";

export default function Schools() {
  return (
    <div>
      {/* schools list starts here */}
      <div class="font-[sans-serif]">
        <div class="p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
          <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Schools</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 1"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center justify-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold"></p>
                </div>

                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}

                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 2"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex justify-center items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold"></p>
                </div>

                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}

                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex justify-center items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold"></p>
                </div>

                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}


                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center justify-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold"></p>
                </div>
                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center justify-center justify-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold"></p>
                </div>
                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center justify-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Far-Western University
                  </h3>
                </div>
                {/* Ratings starts here */}
                <div className="mb-5">
                  <div class="flex justify-center items-center space-x-2">
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-6 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xl font-bold text-gray-400 !ml-4">3.0</p>
                  </div>
                </div>
                {/* Ratings ends here */}
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
