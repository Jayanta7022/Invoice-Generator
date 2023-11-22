import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TableForm({
  description,
  setDiscription,
  quantity,
  setQuantity,
  price,
  setPrice,
  ammount,
  setAmmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditable, setIsEditable] = useState(false);

  //calculate the ammount
  useEffect(() => {
    const calculateAmmount = (ammount) => {
      setAmmount(price * quantity);
    };

    calculateAmmount(ammount);
  }, [ammount, setAmmount, price, quantity, setQuantity]);
  //calculate the total
  useEffect(() => {
    let rows = document.querySelectorAll(".Ammount");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "Ammount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!description || !quantity || !price) {
      alert("Please enter the folllowing Details");
    } else {
      const newItem = {
        id: uuidv4(),
        description,
        quantity,
        price,
        ammount,
      };
      setDiscription("");
      setQuantity("");
      setPrice("");

      setAmmount("");
      setList([...list, newItem]);
      setIsEditable(false);
    }

    // console.log(list);
  };

  //edit row
  const editRow = (id) => {
    const editingId = list.find((row) => row.id === id);
    setIsEditable(true);
    setList(list.filter((row) => row.id !== id));
    setDiscription(editingId.description);
    setQuantity(editingId.quantity);
    setPrice(editingId.price);
  };

  //   delete Row
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <div>
          <div className="flex flex-col">
            <label htmlFor="description">Item Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item Description"
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity">Item Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Item Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Item Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Item price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ammount">Item ammount</label>
            <p>{ammount}</p>
          </div>
        </div>
        <button
          type="submit"
          className=" mt-5 mb-5 bg-blue-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-blue hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditable ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>
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
                <td className="Ammount">{ammount}</td>
                <td>
                  <button
                    onClick={() => deleteRow(id)}
                    className="text-red-400"
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => editRow(id)}
                    className="text-green-400"
                  >
                    edit
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="flex items-end justify-end text-gray-600 text-4xl font-bold">
        <h1>Total rs: {total.toLocaleString()}</h1>
      </div>
    </>
  );
}

export default TableForm;
