import { Image as IImage } from 'sanity';

export interface Product {
  productName: string;
  _id: string;
  productDescription: string;
  productPrice: number;
  productImage: IImage;
  productCategory: {
    name: string;
  };
}

export interface CartItems {
  product: Product;
  qty: number;
}
