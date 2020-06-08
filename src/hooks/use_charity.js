import { useState, useEffect } from 'react';
import emptyArray from '../lib/empty_array';
import lorem from './lorem';

const mockLoadCharity = id => new Promise(resolve => setTimeout(() => resolve({
  id,
  name: `Charity ${id}`,
  description: lorem(Math.random()),
  cost: Math.random() * 10000 | 0,
  value: Math.random() * 20000 | 0,
  programmes: emptyArray(1 + Math.random() * 10 | 0).map((_, index) => index)
}), Math.random() * 50 | 0));

let fetchedCharities = new Map();
const getCharity = async id => {
  if (fetchedCharities.has(id)) return fetchedCharities.get(id);

  const charity = await mockLoadCharity(id);
  fetchedCharities.set(id, charity);
  return charity;
};

const useCharity = id => {
  const [charity, setCharity] = useState({});

  const init = async () => setCharity(await getCharity(id));

  useEffect(() => { init(); }, [id]);

  return charity;
};

export default useCharity;
