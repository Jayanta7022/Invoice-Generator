import React from "react";

function ClientDetails({ clientName, clientAddress }) {
  return (
    <div>
      <section className="mt-5">
        <h2 className="text-2xl text-bold uppercase">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </div>
  );
}

export default ClientDetails;
