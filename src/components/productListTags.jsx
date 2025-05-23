export default function ProductListTags({ product }) {
    return (
        <div className="flex items-center py-4 border-b border-gray-200 text-black text-sm select-none justify-between">
            
            <div className=" flex justify-center">
                <input type="checkbox" className="w-4 h-4" />
            </div>
            
            <div className="flex items-center w-1/5 gap-3 ml-4 max-[800px]:w-1/2 max-[550px]:w-full">
               
                <div className=" flex justify-center">
                    {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="w-10 h-10 rounded-md object-cover bg-gray-300" />
                    ) : (
                        <div className="w-10 h-10 bg-gray-300 rounded-md" />
                    )}
                </div>
                
                <div className="flex flex-col ">
                    <span className="font-bold">{product.name}</span>
                    <span className="text-gray-400 text-xs">{product.category}</span>
                </div>
            </div>
            
            <div className="w-1/5 max-[800px]:w-1/2 max-[550px]:hidden">
                <span>{product.productCode}</span>
            </div>
            
            <div className="w-1/5 max-[800px]:hidden">
                <span className="text-gray-400">Dec 20, 2023</span>
            </div>
           
            <div className="w-1/5 max-[800px]:hidden">
                <span className="font-bold">{product.price} ₺</span>
            </div>
            
            <div className="w-1/5 max-[800px]:hidden flex items-center gap-2 flex-row ">
                {product.status ? (
                    <div className="flex-row flex justify-between items-center w-full">
                    <span className="bg-green-50 text-green-500 px-4 py-2 rounded-md flex items-center gap-2 w-fit">
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        Completed
                        
                    </span>
                    <span className="material-symbols-outlined text-base ml-auto">pending</span>
                    </div>
                ) : (
                    <div className="flex-row flex justify-between items-center w-full">
                    <span className="bg-red-50 text-red-500 px-4 py-2 rounded-md flex items-center gap-2 w-fit">
                        <span className="material-symbols-outlined text-base">block</span>
                        cancelled
                    </span>
                    <span className="material-symbols-outlined text-base ml-auto">pending</span>
                    </div>
                )}
            </div>
        </div>
    )
}
