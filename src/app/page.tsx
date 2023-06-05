/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import Card from '@/components/Card';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';

export const getSanityData = async () => {
  const res = await client.fetch(`*[_type=='product']{
    productName,
    _id,
    productDescription,
    productPrice,
    productImage,
    productCategory ->{
      name
    }
  
  }`);
  return res;
};

interface IIProduct {
  productName: string;
  _id: string;
  productDescription: string;
  productPrice: number;
  productImage: IImage;
  productCategory: {
    name: string;
  };
}

export default async function Home() {
  const getData: IIProduct[] = await getSanityData();

  return (
    <main className="">
      <section id="Products">
        <div className="my-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-10 card  ">
          {getData.map((item) => {
            return (
              <div key={item._id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
