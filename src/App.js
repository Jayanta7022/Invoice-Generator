import { useState, useRef } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Date from "./components/Date";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [ShowInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [ammount, setAmmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {ShowInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className=" bg-blue-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-blue hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-5">
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <Header handlePrint={handlePrint} />

              <MainDetails name={name} address={address} />

              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />

              <Date
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />

              <Table
                description={description}
                quantity={quantity}
                price={price}
                ammount={ammount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />

              <Notes notes={notes} />

              <Footer
                name={name}
                website={website}
                email={email}
                address={address}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-blue hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            {/* name,address,email,phone,bank name, bank account number,client name,client address,client email,invoice number,invoice date,notes */}
            <div className="flex flex-col justify-center ">
              <label htmlFor="name"> Enter Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address"> Enter Your Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your Address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email"> Enter Your Email</label>
              <input
                type="email"
                name="text"
                id="email"
                placeholder="Enter Your Name"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="website"> Enter Your Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter Your website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="phone"> Enter Your phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName"> Enter Your Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter Your bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">
                Enter Your Bank Account Number
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter Your bank Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName"> Client Name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="clientName"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor="clientAddress"> Enter Your Client address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter Your Client address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              <label htmlFor="invoiceNumber"> Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate"> Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Dew Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              {/* this is table form */}
              <article>
                <TableForm
                  description={description}
                  setDiscription={setDiscription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  ammount={ammount}
                  setAmmount={setAmmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <label htmlFor="notes"> Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                col="30"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white  font-bold py-2 px-8 rounded shadow border-2 border-blue hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                preview invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
