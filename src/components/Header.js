import React from "react";

function Header({ handlePrint }) {
  return (
    <div>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase traking-wild text-4xl mb-3">
            invoicer
          </h1>
        </div>

        {/* <div>
          <ul className="flex items-center justify-between flex wrap">
            <li>
              <button
                onClick={handlePrint}
                className=" bg-gray-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-gray hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className=" bg-blue-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-blue hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            </li>
            <li>
              <button className=" bg-green-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-green hover:bg-transparent hover:text-green-500 transition-all duration-300">
                send
              </button>
            </li>
          </ul>
        </div> */}
      </header>
    </div>
  );
}

export default Header;
