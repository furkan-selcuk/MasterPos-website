import ProductSumTags from "./productsumtags";

export default function ProductSum() {
    
    const data = [
        {
            title: "Active Products",
            value: 247.384,
            percent: 15,
            isIncrease: true,
        },
        {
            title: "New Products",
            value: +2.368,
            percent: 2,
            isIncrease: true,
        },
        {
            title: "Completed Order",
            value: 33.847,
            percent: 4.5,
            isIncrease: false,
        },
        {
            title: "Pending Payment",
            value: 1.284,
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
        <div className="flex items-center gap-4 flex-row justify-stretch w-full mt-10 max-[800px]:flex-col max-[800px]:gap-2 max-[800px]:h-full">
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
