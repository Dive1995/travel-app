import React from "react";

function TravelEditContent() {
  return (
    <div className="col-span-2 2xl:col-span-1 m-4">
      <div className="h-50 overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1590651639672-5f0178aa4812?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="overflow-hidden"
        />
      </div>
      <section>
        <h1 className="text-lg font-bold">Trip to Berlin</h1>
        <p>14.05 - 20.05</p>
      </section>
    </div>
  );
}

export default TravelEditContent;
