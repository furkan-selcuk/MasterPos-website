import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleMode } from '@/store/slices/themeSlice';

export default function Header() {
    const [isOn, setIsOn] = useState<boolean>(true);
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className="dark:bg-black bg-white flex items-center justify-between w-full h-full flex-row  max-[800px]:flex-row-reverse max-[800px]:items-center max-[800px]:justify-center max-[550px]:justify-between ">
            <header className="flex   w-full h-full flex-col justify-center max-[800px]:hidden">
                <p className="text-2xl font-bold text-[#202020] dark:text-white"> Products</p>
                <p className=" text-base text-[#8F8F8F]"> Manage your products</p>
            </header>
            <div className="flex items-center  gap-[20px] w-full h-full flex-row  ">
                <button className="max-[800px]:hidden">
                <span className="material-symbols-outlined text-[#878787]">
                    {mode === 'light' ? 'Sunny' : 'bedtime'}
                </span>
                </button>

                <button 
                    className={`max-[800px]:hidden relative w-[58px] h-[30px] focus:outline-none transition-colors duration-300 pl-2 pr-10 ${isOn ? "bg-[#e3e3e3]" : "bg-[#f3f3f3]"} rounded-full`}
                    aria-label="switch"
                    onClick={() => {
                        setIsOn(!isOn);
                        dispatch(toggleMode());
                    }}
                >
                    <span
                        className={`absolute top-1/2 -translate-y-1/2 left-0 w-[30px] h-[30px] rounded-full border-4 border-white transition-all duration-300 ${isOn ? "bg-[#4F56D3] translate-x-0" : "bg-gray-300 translate-x-[28px]"}`}
                    />
                </button>
                <button className="max-[800px]:hidden">
                <span className="material-symbols-outlined text-[#878787] max-[800px]:hidden">
                    Language
                </span>
                </button>
                <button className="max-[800px]:hidden">
                <span className="material-symbols-outlined text-[#878787] max-[800px]:hidden">
                    Notifications
                </span>
                </button>
                <button className="max-[800px]:hidden">
                <span className="material-symbols-outlined text-[#878787] max-[800px]:hidden">
                    mail
                </span>
                </button>
                <button className="max-[800px]:hidden">
                <span className="material-symbols-outlined text-[#878787] max-[800px]:hidden">
                    instant_mix
                </span>
                </button>
                <div className="flex items-center gap-2 max-[800px]:ml-auto max-[550px]:hidden">
                    <div className="h-[57px] w-[57px] bg-[#C4C4C4] rounded-full flex-shrink-0"></div>
                    <div className="flex flex-col justify-center ml-2">
                        <p className="text-base font-bold text-[#202020] dark:text-white">Patricia Peter</p>
                        <p className="text-sm text-[#8F8F8F]">Super Admin</p>
                    </div>
                </div>
                 <div className="hidden max-[550px]:block">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56.4782" height="56.4782" rx="28.2391" fill="url(#paint0_linear_5_6040)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8621 22.2836C40.7763 22.2836 41.6496 22.6758 42.2583 23.3591C42.8659 24.0434 43.154 24.9575 43.0467 25.8665L41.3685 39.8788C41.1776 41.4906 39.8089 42.7081 38.1839 42.7081H34.5146V33.4686H31.8036L28.7554 40.0792L25.7207 33.4686H23.0098V42.7081H19.5274C17.9024 42.7081 16.5337 41.4907 16.3427 39.8769L14.6646 25.8686C14.5574 24.9575 14.8453 24.0434 15.4531 23.3601C16.0618 22.6758 16.9351 22.2836 17.8503 22.2836H39.8621ZM25.6938 42.7081H27.4836L25.6938 39.0065V42.7081ZM30.0407 42.7081H31.8306V39.0065L30.0407 42.7081Z" fill="#CDFF65"/>
                        <path d="M34.7761 28.5589C34.198 28.5589 33.7302 28.0911 33.7302 27.513V20.6993C33.7302 18.0325 31.5597 15.8621 28.8929 15.8621C26.2261 15.8621 24.0557 18.0325 24.0557 20.6993V27.5129C24.0557 28.0909 23.5878 28.5588 23.0098 28.5588C22.4317 28.5588 21.9639 28.0909 21.9639 27.5129V20.6993C21.9639 16.8783 25.0719 13.7703 28.8929 13.7703C32.7139 13.7703 35.822 16.8783 35.822 20.6993V27.5129C35.822 28.0911 35.3541 28.5589 34.7761 28.5589Z" fill="#EBF3EA"/>
                        <defs>
                            <linearGradient id="paint0_linear_5_6040" x1="28.2391" y1="0" x2="47.7893" y2="67.8825" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#161919"/>
                                <stop offset="1" stop-color="#5B5C7A"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                
                <button className="max-[550px]:hidden ">
                <span className="material-symbols-outlined text-[#878787]">keyboard_arrow_down</span>
                </button>
               <button className="max-[800px]:block hidden max-[550px]:ml-auto">
                <span className="material-symbols-outlined text-[#878787]">menu</span>
                </button>
            </div>
        </div>
    )
}

