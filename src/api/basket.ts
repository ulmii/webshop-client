import {IBasket} from '../interface';

export const fetchBasket = async (auth: string): Promise<IBasket> => {
  return await fetch(process.env.REACT_APP_APIHOST + '/baskets', {
    headers: {
      'X-Auth': auth,
    },
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(response => response.json());
};

export const updateBasket = async (basket: IBasket): Promise<IBasket> => {
  const auth = localStorage.getItem('authToken');
  if (!auth) {
    return Promise.reject();
  }

  return await fetch(process.env.REACT_APP_APIHOST + '/baskets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': auth,
    },
    body: JSON.stringify(basket),
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(response => response.json())
    .catch(e => console.error('api' + e));
};

export default fetchBasket;
