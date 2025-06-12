'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getProducts } from '@/services/api';
import { setProducts, setLoading, setError } from '@/store/slices/productSlice';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProductSum from '@/components/productSum';
import ProductList from '@/components/productList';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getProducts(1);
        dispatch(setProducts(data));
      } catch (error) {
        dispatch(setError('Ürünler yüklenirken bir hata oluştu'));
        console.error('Hata:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div className="flex min-h-screen flex-row max-w-[1900px]   bg-[#F6F6F6] dark:bg-[#878787]">
      <aside className="w-64 bg-white pb-30 border-r border-gray-200 max-w-[345px] max-[800px]:max-w-[130px] max-[550px]:hidden dark:bg-black">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col ml-5 mr-5 max-[800px]:w-full rounded-sm">
        <header className="h-[105px]  flex items-center px-6 max-w-[1500px] bg-[#ffffff] dark:bg-black rounded-sm">
          <Header />
        </header>
        <div className="h-[120px] max-[800px]:h-full flex items-center   max-w-[1500px] bg-[#F6F6F6] dark:bg-[#878787]">
          <ProductSum />
        </div>
        <main className="flex-1 p-8 max-w-[1500px] mt-10 bg-[#ffffff] dark:bg-black">
          <ProductList />
        </main>
      </div>
    </div>
  );
}
