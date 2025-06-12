import PropTypes from "prop-types";

interface SidebarButtonProps {
    icon: string;
    text: string;
    count?: number | string;
}

export default function SidebarButton({ icon, text, count }: SidebarButtonProps) {
    return (
        <div>
            <button className="flex items-center gap-2 h-[50px] relative w-full max-[800px]:justify-center cursor-pointer ">
                <span className="material-symbols-outlined text-[#878787] w-[25px] h-[25px]">{icon}</span>
                <span className="text-[#878787] text-base font-medium max-[800px]:hidden">{text}</span>
                {count !== undefined && (
                    <span className="ml-auto flex items-center justify-center w-7 h-7 rounded-full bg-[#CDFF65] text-[#161919] font-bold text-sm absolute right-0 max-[800px]:hidden">
                        {count}
                    </span>
                )}
            </button>
        </div>
    )
}

SidebarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
};
