export default function ProductSumTags({ title, value, percent, isIncrease }) {
    return (
        <div className="p-2 bg-[#ffffff] rounded-lg w-full h-full flex-1 min-w-0">
            <p className="text-[#8F8F8F] text-base font-normal ">{title}</p>
            <p className="text-3xl font-bold text-[#202020]">{value.toLocaleString()}</p>
            <div className="flex items-center gap-1 mt-2">
                <span className={`material-symbols-outlined text-base ${isIncrease ? "text-[#6DD400]" : "text-[#FF4D4F]"}`}>
                    trending_up
                </span>
                <span className={`text-base font-normal ${isIncrease ? "text-[#6DD400]" : "text-[#FF4D4F]"}`}>{isIncrease ? "+" : "-"}{percent}%</span>
            </div>
        </div>
    )
}
