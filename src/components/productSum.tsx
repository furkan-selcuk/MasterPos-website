import ProductSumTags from "./productsumtags";

interface ProductSumData {
    title: string;
    value: number;
    percent: number;
    isIncrease: boolean;
}

export default function ProductSum() {
    
    const data: ProductSumData[] = [
        {
            title: "Active Products",
            value: 247384,
            percent: 15,
            isIncrease: true,
        },
        {
            title: "New Products",
            value: 2368,
            percent: 2,
            isIncrease: true,
        },
        {
            title: "Completed Order",
            value: 33847,
            percent: 4.5,
            isIncrease: false,
        },
        {
            title: "Pending Payment",
            value: 1284,
            percent: 5,
            isIncrease: true,
        },
        {
            title: "Canceled Order",
            value: 836,
            percent: 2,
            isIncrease: false,
        },
    ];

    return (
        <div className=" flex items-center gap-4 flex-row justify-stretch w-full mt-10 max-[800px]:flex-col max-[800px]:gap-2 max-[800px]:h-full">
            {data.map((item, idx) => (
                <ProductSumTags
                    key={idx}
                    title={item.title}
                    value={item.value}
                    percent={item.percent}
                    isIncrease={item.isIncrease}
                />
            ))}
        </div>
    )
}
