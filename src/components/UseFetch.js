import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(url);
      const response = await get.json();
      console.log(response);
      setData(response);
    }

    getData();
  }, [])
  
  return [data];
}

export default UseFetch;
