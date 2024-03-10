import { useEffect, useState } from "react";
import logo from "/logo.png";
const FormSubmission = () => {
  return (
    <>
      {/* <div className="bg-blue-500">hi</div> */}

      <div className="">
        <nav class="bg-white border-gray-200 sticky top-0">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-start space-x-5 p-4 m-0">
            <a href="" class="flex  space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt="Logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
            </a>
            <div
              class="justify-start items-start w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul class="flex flex-col font-normal p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 hover:bg-blue-100 text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                    aria-current="page"
                  >
                    My collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 hover:bg-blue-100 text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                  >
                    Learners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 hover:bg-blue-100 text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                  >
                    Custom Domains
                  </a>
                </li>
                {/* <li>
        <a href="#" class="block py-2 px-3 hover:bg-blue-100 text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"></a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 hover:bg-blue-100 text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"></a>
      </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <div className="bg-blue-00 max-w-screen">
          <div className="flex justify-center items-center h-screen">
            <div className="h-4/5 w-1/2 outline rounded">
              <div className="p-2 flex justify-between font-medium">
                <span>AI Assistant for Course Creation</span>
                <div className="text-xs">
                  <p>40 credits left.</p>
                  <p>Renewal date: 04/09/23</p>
                </div>
              </div>
              <hr />
              <div className="p-2">
                <h1 className="font-medium">Describe your mini-course idea:</h1>

                <form class="max-w-2xl pt-2">
                  <div class="mb-5 mt-2">
                    <input
                      type="text"
                      id="profession"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold  block w-full p-2.5  placeholder-gray-500"
                      placeholder="Tell us your profession"
                      required
                    />
                  </div>
                  <div class="mb-5">
                    <input
                      type="text"
                      id="Audience"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg  block w-full p-2.5  placeholder-gray-500"
                      placeholder="What is your target audience?"
                      required
                    />
                  </div>
                  <p className="text-xs font-medium">
                    The key to successful AI guidance is a precise and detailed
                    description. Your description should be at least 5 words.
                  </p>

                    <div className="p-2">
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-semibold placeholder-gray-500"
                      placeholder="Description"
                    ></textarea>
                    </div>
                    <div className="pt-2">
                    <button  
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Generate Title
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmission;
