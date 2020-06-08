import React from 'react';
import useCharity from "../hooks/use_charity";
import { dollar, percent } from "../lib/number_presenter";
import { navigate } from "@reach/router";

const Summary = ({ id }) => {
  const charity = useCharity(id);
  const programmes = charity.programmes || [];

  const navigateTo = () => {
    console.log(id);
    navigate(`/${id}`);
  };

  return <div className="summary" onClick={navigateTo}>
    <h1>{charity.name}</h1>
    <div className="detail">{charity.description}</div>
    <div className="splitLine">
      <div className="titleFlex">
        <div>Value:</div><div>{dollar(charity.value)}</div>
      </div>
      <div className="titleFlex">
        <div>Cost:</div><div>{dollar(charity.cost)}</div>
      </div>
      <div className="titleFlex">
        <div>ROI:</div><div>{percent(charity.value / charity.cost)}</div>
      </div>
    </div>
    {programmes.length ?
      <div className="center">
        {programmes.length} {programmes.length > 1 ? 'Programmes' : 'Programme'}
      </div>
      : ''
    }
  </div>;
};

export default Summary;
