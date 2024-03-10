const LandingPage = () => {
return(
<>
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
                </ul>
              </div>
            </div>
        </nav>
        </div>
        </>

)}

export default LandingPage;