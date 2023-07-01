import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState(" ");

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
        <h5>{message}</h5>
      </form>
    </div>
  );
}
