import axios from "axios";

export const newdata = async () => {
  let response = await axios.get(
    `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
  );
  return response.data;
};

// import React, { useEffect, useState } from "react";

// const newdata = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(
//           `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
//         );
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         let actualData = await response.data;
//         setData(actualData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//     console.log(data);
//  return data;
// };

// export default newdata;
