import React from 'react';
import useCharity from "../hooks/use_charity";
import { useParams } from "@reach/router";


const Page = ({ id }) => {
  const charity = useCharity(id);
  return <div className="flexStore column">
    <h1>{charity.name}</h1>
    <div>{charity.description}</div>
  </div>;
};
export default Page;
