"use client"
import React from 'react';
import CardComponent2 from '@/components/cards/CardComponent2';
import { ProductType2 } from '@/types/product2';
import LoadingComponent from './loading';
import { Suspense } from 'react';

async function fetchProduct() {
  const product = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

export default function Home() {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProduct();
        setProduct(productsData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-10 flex justify-center flex-wrap gap-5">
      <h1>សួស្តី</h1>
      <h1>Hello</h1>
      <Suspense fallback={<LoadingComponent/>} >
        {!loading && (
          product?.map((pro: ProductType2) => (
            <CardComponent2
              thumbnailUrl={pro.thumbnailUrl}
              title={pro.title}
              key={pro.id}
            />
          ))
        )}
      </Suspense>
    </div>
  );
}
