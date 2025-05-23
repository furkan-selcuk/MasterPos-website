'use client';
import { useEffect } from 'react';
import { useProduct } from '@/context/ProductContext';
import { getProducts } from '@/services/api';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProductSum from '@/components/productSum';
import ProductList from '@/components/productList';
export default function Home() {
  const { setProducts, loading, setLoading, error, setError } = useProduct();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(1);
        setProducts(data);
      } catch (error) {
        setError('Ürünler yüklenirken bir hata oluştu');
        console.error('Hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div className="flex min-h-screen flex-row max-w-[1900px]   bg-[#F6F6F6]">
      
      <aside className="w-64 bg-white pb-30 border-r border-gray-200 max-w-[345px] max-[800px]:max-w-[130px] max-[550px]:hidden">
        <Sidebar />
      </aside>
      
      <div className="flex-1 flex flex-col ml-5 mr-5 max-[800px]:w-full">
      
        <header className="h-[105px]  flex items-center px-6 max-w-[1500px] bg-[#ffffff]">
          <Header />
        </header>
        <div className="h-[120px] max-[800px]:h-full flex items-center   max-w-[1500px] bg-[#F6F6F6]">
          <ProductSum />
        </div>
        
        <main className="flex-1 p-8 max-w-[1500px] mt-10 bg-[#ffffff]">
          <ProductList />
          
        </main>
      </div>
    </div>
  );
}
