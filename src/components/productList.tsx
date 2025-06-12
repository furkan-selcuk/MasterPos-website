'use client';
import ProductListTags from "./productListTags";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import { Product } from '@/store/slices/productSlice';

export default function ProductList() {
    const products = useSelector((state: RootState) => state.product.products);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProducts = products.filter((product: Product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <header className="flex  justify-between flex-row max-[550px]:flex-col  dark:bg-black dark:text-white">
                <h1 className="text-xl font-bold">All Products</h1>
                <div className="flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="border border-gray-300 rounded-md px-4 py-2 max-[800px]:hidden dark:text-black " 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="max-[800px]:hidden">
                    <span className="material-symbols-outlined border border-gray-300 rounded-md px-2 py-2 w-[40px] h-[40px] text-[#515161] max-[800px]:hidden">sync</span>
                    </button>

                    <button className="max-[800px]:hidden">
                    <span className="material-symbols-outlined border border-gray-300 rounded-md px-2 py-2 w-[40px] h-[40px] text-[#515161] max-[800px]:hidden">calendar_today</span>
                    </button>
                    <button className="max-[800px]:hidden">
                    <span className="material-symbols-outlined border border-gray-300 rounded-md px-2 py-2 w-[40px] h-[40px] text-[#515161] max-[800px]:hidden">filter_list</span>
                    </button>
                    <button className="max-[800px]:block hidden">
                    <span className="material-symbols-outlined border border-gray-300 rounded-md px-2 py-2 w-[40px] h-[40px] text-[#515161] ">search</span>
                    </button>
                    <button className="">
                    <span className="material-symbols-outlined border border-gray-300 rounded-md px-2 py-2 w-[40px] h-[40px] text-[#515161] ">more_vert</span>
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 "> <span className="material-symbols-outlined">add_circle</span> Add New Product</button>
                </div>
            </header>
            
            
            <div className="flex items-center py-4 border-b border-gray-200 text-gray-400 text-sm font-medium select-none">
                <input type="checkbox" className="mr-4 w-4 h-4" />
                <span className="w-1/5 max-[800px]:w-1/2 max-[550px]:w-full">Product</span>
                <span className="w-1/5 max-[800px]:w-1/2 max-[550px]:hidden">Transaction ID</span>
                <span className="w-1/5 max-[800px]:hidden">Date</span>
                <span className="w-1/5 max-[800px]:hidden">Amount</span>
                <span className="w-1/5 max-[800px]:hidden">Status</span>
            </div>
            
            {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductListTags key={product.id} product={product} />
                ))
            ) : (
                <div className="text-center text-gray-400 py-8">Ürün bulunamadı.</div>
            )}
        </div>
    )
}
