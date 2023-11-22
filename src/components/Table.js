import React from "react";

function Table({
  description,
  quantity,
  price,
  ammount,
  list,
  setList,
  total,
  setTotal,
}) {
  return (
    <div>
      <table width="100%" className="mb-10 mt-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>

            <td className="font-bold">Quantity</td>

            <td className="font-bold">Price</td>

            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, ammount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description} </td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{ammount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="flex items-end justify-end text-gray-600 text-4xl font-bold">
        <h1>Total rs: {total.toLocaleString()}</h1>
      </div>
    </div>
  );
}

export default Table;
