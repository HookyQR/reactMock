import React from 'react';
import useUser from '../hooks/use_user';

import Summary from '../components/summary';

const Page = () => {
  const user = useUser();
  const investments = user.investments || [];
  return <div className="flexStore">
    {investments.map(investment => <Summary {...investment} key={investment.id} />)}
  </div>;
};

export default Page;
