import React from "react";

export default function Notes({ notes }) {
  return (
    <div>
      <section className="mb-5 mt-10">
        {/* TextArea */}
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </div>
  );
}
