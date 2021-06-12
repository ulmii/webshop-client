import {IProduct} from '../interface';

export const fetchProducts = async (): Promise<IProduct[]> => {
  return await fetch(process.env.REACT_APP_APIHOST + '/products')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(response => response.json());
};

export default fetchProducts;
