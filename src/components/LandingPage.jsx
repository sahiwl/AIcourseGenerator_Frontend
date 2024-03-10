import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate();

    return (
      <>
        <div className="">
          <nav class="bg-white border-gray-200 sticky top-0">
            <div className="flex justify-between">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-start space-x-5 p-4 m-0">
                <a href="" class="flex  space-x-3 rtl:space-x-reverse">
                  <img src="/logo.png" className="h-8" alt="Logo" />
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
                  </ul>
                </div>
              </div>
              <div className="p-5">
                <button className="text-gray-900 bg-white font-medium rounded-lg text-xs w-full sm:w-auto px-2 py-1 text-center border border-blue-400">
                  👑Upgrade
                </button>
              </div>
            </div>
          </nav>
  
          <div className="bg-pink-00 max-w-screen">
            <div className="p-3 flex justify-start h-screen">
              <div className="h-3/5 w-screen  rounded grid space-y-3">
                <div className=" h-10 rounded-xl bg-gray-100 ">
                  <button className="pl-7 pt-2 pb-2 pr-7 rounded-3xl hover:bg-gray-300">
                    Add collection
                  </button>
                </div>
                <div className="">
                  <div className="flex justify-between rounded-t-xl bg-gray-100">
                    <div className="pt-5 pl-5 font-semibold font-sans">
                      Collection-1
                    </div>
                    <div className="">
                      <div className="space-x-3 pt-5 pr-5">
                        <button className="text-gray-900 bg-white  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                          View
                        </button>
                        <button className="text-gray-900 bg-white  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                          Edit Learning Page
                        </button>
                        <button className="text-white bg-blue-700 outline outline-1 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                          Learner's Access
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 grid rounded-b-xl pl-2">
                    <div className="flex flex-row items-center">
                      <div className="bg-blue-300 m-2 h-72 w-72 flex justify-center items-center rounded-xl">
                        {/* <div className="absolute -translate-y-[-9rem] text-center"> */}
                        <div className="text-center text-md">
                          <h1 className="p-5 font-semibold">Create a course</h1>
                          <p>
                            Start building the course super-fast, either from
                            scratch or using the AI Course Creator.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1 mt-2">
                    <button
                      id="Audience"
                      class="bg-gray-100 pl-7 pt-2 pb-2 pr-7 rounded-3xl hover:bg-gray-300 font-medium text-sm w-full sm:w-auto text-center"
                    >
                      + Add collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default LandingPage;
  