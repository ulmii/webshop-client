import {IProduct} from '../interface';

export const fetchProducts = async (): Promise<IProduct[]> => {
  return await fetch('http://localhost:9000/products').then(response =>
    response.json()
  );
};

export default fetchProducts;
