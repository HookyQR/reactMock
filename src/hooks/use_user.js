import { useState, useEffect } from 'react';
import emptyArray from '../lib/empty_array';

const mockUsers = [
  'John',
  'Phil',
  'Mark'
].map((name, id) => ({
  id, name, greeting: 'Hello', investments:
    emptyArray(1 + Math.random() * 10 | 0).map((_, id) => ({
      amount: Math.random() * 1000 | 0,
      id
    }))
}));

const unloadedUser = {
  name: 'Stranger',
  greeting: 'Welcome'
};

let singletonUser = unloadedUser;

const loginUser = (id) => new Promise(resolve => {
  if (singletonUser.loaded) return resolve();
  setTimeout(
    () => {
      if (singletonUser.loaded) return resolve();

      const index = Math.random() * mockUsers.length | 0;
      singletonUser = mockUsers[index];
      singletonUser.loaded = true;
      resolve();
    }, 1000);
});

const useUser = () => {
  const [user, setUser] = useState(unloadedUser);

  const init = async () => {
    await loginUser();
    setUser(singletonUser);
  };

  useEffect(() => { init(); });

  return user;
};

export default useUser;
