import React from "react";

function Date({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <div>
      <article className=" my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number: </span>
            {invoiceNumber}
          </li>
          <li className="bg-gray-100">
            <span className="font-bold">Invoice Dates: </span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due Dates: </span>
            {dueDate}
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Date;
