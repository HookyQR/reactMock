import { useState, useEffect } from 'react';
import emptyArray from '../lib/empty_array';

const mockLoadProgramme = id => new Promise(resolve => setTimeout(() => resolve({
  id,
  name: `Programme ${id}`,
  description: 'More detail',
  cost: Math.random() * 10000 | 0,
  value: Math.random() * 20000 | 0,
  outcomes: emptyArray(Math.random() * 10 | 0).map((_, index) => index)
}), Math.random() * 50 | 0));

let fetchedProgrammes = new Map();

const getProgramme = async id => {
  if (fetchedProgrammes.has(id)) return fetchedProgrammes.get(id);

  const programme = await mockLoadProgramme(id);

  fetchedProgrammes.set(id, programme);
  return programme;
};

const useProgramme = id => {
  const [programme, setProgramme] = useState({});

  const init = async () => setProgramme(await getProgramme(id));

  useEffect(() => { init(); }, [id]);

  return programme;
};

export default useProgramme;
