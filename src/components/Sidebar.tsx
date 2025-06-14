'use client';
import SidebarButton from "./sidebarButton"
import { useState, useEffect } from "react";

interface SidebarButtonType {
    icon: string;
    text: string;
    count?: number;
    subItems?: { icon: string; text: string }[];
}

export default function Sidebar() {
    const [productsOpen, setProductsOpen] = useState<boolean>(false);
    const [isTablet, setIstablet] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= 800 : false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const handleResize = () => {
            setIstablet(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarButtons: SidebarButtonType[] = [
        { icon: "home", text: "Dashboard" },
        { icon: "archive", text: "Products", subItems: [
            { icon: "inventory_2", text: "All Products" },
            { icon: "add_circle", text: "Add New Product" },
            { icon: "sell", text: "Tags" }
        ]},
        { icon: "window", text: "Categories" },
        { icon: "grid_on", text: "Sub Category" },
        { icon: "verified", text: "Brands" },
        { icon: "barcode_scanner", text: "Scan Barcode" },
        { icon: "upload_file", text: "Import Products" },
        { icon: "trending_up", text: "Sales", count: 49 },
        { icon: "shopping_basket", text: "Point of Sales" },
        { icon: "sort", text: "Leaderboards" },
        { icon: "shopping_cart", text: "Orders" },
        { icon: "sync", text: "Refund" },
        { icon: "Percent", text: "Taxes" },
        { icon: "assignment", text: "Stock" },
        { icon: "forum", text: "Chat", count: 80 },
        { icon: "calendar_today", text: "Calendar" },
        { icon: "mail", text: "Email" },
        { icon: "instant_mix", text: "Settings" },
        { icon: "logout", text: "Calendar" }
    ];

    const filteredButtons = sidebarButtons.filter(button => 
        button.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-64 max-[800px]:w-[130px] max-[800px]:justify-center dark:bg-black">
            <header className="h-[125px] text-[#161919] flex items-center px-6 w-full flex justify-between border-b border-gray-200 max-[800px]:px-2 max-[800px]:h-[80px] max-[800px]:justify-center max-[800px]:w-[130px]">
                <div className="flex items-center">
                    {isTablet ? (
                        <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#161919] dark:fill-white">
                            <rect x="0.760986" y="0.260864" width="56.4782" height="56.4782" rx="28.2391" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M40.6231 22.5444C41.5372 22.5444 42.4106 22.9366 43.0193 23.6199C43.6269 24.3043 43.915 25.2184 43.8077 26.1273L42.1295 40.1397C41.9385 41.7514 40.5699 42.969 38.9449 42.969H35.2756V33.7295H32.5646L29.5164 40.3401L26.4817 33.7295H23.7707V42.969H20.2883C18.6633 42.969 17.2947 41.7515 17.1037 40.1377L15.4256 26.1294C15.3184 25.2184 15.6063 24.3043 16.2141 23.621C16.8228 22.9366 17.6961 22.5444 18.6113 22.5444H40.6231ZM26.4548 42.969H28.2446L26.4548 39.2674V42.969ZM30.8017 42.969H32.5916V39.2674L30.8017 42.969Z" fill="#CDFF65" />
                            <path d="M35.537 28.8197C34.959 28.8197 34.4912 28.3519 34.4912 27.7739V20.9602C34.4912 18.2934 32.3207 16.1229 29.6539 16.1229C26.9871 16.1229 24.8166 18.2934 24.8166 20.9602V27.7737C24.8166 28.3518 24.3488 28.8196 23.7707 28.8196C23.1927 28.8196 22.7249 28.3518 22.7249 27.7737V20.9602C22.7249 17.1392 25.8329 14.0311 29.6539 14.0311C33.4749 14.0311 36.5829 17.1392 36.5829 20.9602V27.7737C36.5829 28.3519 36.1151 28.8197 35.537 28.8197Z" fill="#EBF3EA" />
                            <defs>
                                <linearGradient id="paint0_linear_5_5548" x1="29.0001" y1="0.260864" x2="48.5503" y2="68.1434" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#161919" />
                                    <stop offset="1" stopColor="#5B5C7A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    ) : (
                        <svg width="144" height="57" viewBox="0 0 144 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#161919] dark:fill-white">
                            <rect y="0.260864" width="56.4782" height="56.4782" rx="28.2391" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.862 22.5444C40.7761 22.5444 41.6495 22.9366 42.2582 23.6199C42.8658 24.3043 43.1539 25.2184 43.0466 26.1273L41.3684 40.1397C41.1774 41.7514 39.8088 42.969 38.1838 42.969H34.5145V33.7295H31.8035L28.7553 40.3401L25.7206 33.7295H23.0096V42.969H19.5272C17.9022 42.969 16.5336 41.7515 16.3426 40.1377L14.6645 26.1294C14.5573 25.2184 14.8452 24.3043 15.453 23.621C16.0617 22.9366 16.935 22.5444 17.8501 22.5444H39.862ZM25.6936 42.969H27.4835L25.6936 39.2674V42.969ZM30.0406 42.969H31.8305V39.2674L30.0406 42.969Z" fill="#CDFF65"  />
                            <path d="M34.7759 28.8197C34.1979 28.8197 33.73 28.3519 33.73 27.7739V20.9602C33.73 18.2934 31.5596 16.1229 28.8928 16.1229C26.226 16.1229 24.0555 18.2934 24.0555 20.9602V27.7737C24.0555 28.3518 23.5877 28.8196 23.0096 28.8196C22.4316 28.8196 21.9637 28.3518 21.9637 27.7737V20.9602C21.9637 17.1392 25.0718 14.0311 28.8928 14.0311C32.7137 14.0311 35.8218 17.1392 35.8218 20.9602V27.7737C35.8218 28.3519 35.354 28.8197 34.7759 28.8197Z" fill="#EBF3EA" />
                            <path d="M136.467 26.6281V14.0464H140.294V15.4721C140.561 15.2554 140.894 15.0302 141.294 14.7968C141.694 14.5466 142.12 14.3215 142.57 14.1214C143.02 13.9213 143.454 13.7962 143.871 13.7462V17.3982C143.47 17.4482 143.045 17.5482 142.595 17.6983C142.145 17.8317 141.719 17.9902 141.319 18.1736C140.919 18.3403 140.577 18.4988 140.294 18.6488V26.6281H136.467Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M129.03 26.9283C127.613 26.9283 126.479 26.6948 125.628 26.2279C124.795 25.761 124.194 25.0523 123.828 24.1018C123.477 23.1513 123.302 21.9506 123.302 20.4998C123.302 18.9824 123.519 17.7317 123.953 16.7478C124.403 15.7473 125.062 15.0052 125.929 14.5216C126.796 14.0214 127.888 13.7712 129.205 13.7712C131.14 13.7712 132.591 14.2382 133.558 15.172C134.542 16.1058 135.034 17.5816 135.034 19.5994L134.833 21.5754H127.129C127.146 22.3758 127.313 22.9762 127.63 23.3764C127.963 23.7599 128.53 23.9517 129.33 23.9517C129.847 23.9517 130.423 23.9433 131.056 23.9267C131.707 23.8933 132.349 23.86 132.982 23.8266C133.616 23.7933 134.158 23.7599 134.608 23.7266L134.683 26.3279C134.25 26.4113 133.708 26.503 133.057 26.6031C132.407 26.6865 131.732 26.7615 131.031 26.8282C130.331 26.8949 129.664 26.9283 129.03 26.9283ZM127.104 19.2492H131.206C131.206 18.2486 131.048 17.5566 130.731 17.1731C130.414 16.7728 129.906 16.5727 129.205 16.5727C128.505 16.5727 127.98 16.7812 127.63 17.1981C127.296 17.5983 127.121 18.282 127.104 19.2492Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M119.692 26.9282C118.758 26.9282 117.999 26.8032 117.416 26.553C116.832 26.2862 116.407 25.8276 116.14 25.1773C115.89 24.5103 115.765 23.5764 115.765 22.3758V17.198H114.414V14.0463H115.765V10.9197H119.592V14.0463H122.544V17.198H119.592V21.4253C119.592 21.9923 119.617 22.4342 119.667 22.751C119.734 23.0678 119.859 23.293 120.042 23.4264C120.226 23.5598 120.501 23.6265 120.868 23.6265C120.968 23.6265 121.126 23.6181 121.343 23.6015C121.56 23.5848 121.776 23.5764 121.993 23.5764C122.227 23.5598 122.402 23.5431 122.519 23.5264L122.619 26.553C122.202 26.6364 121.701 26.7198 121.118 26.8032C120.551 26.8865 120.076 26.9282 119.692 26.9282Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M108.498 26.9283C107.881 26.9283 107.247 26.8949 106.597 26.8282C105.946 26.7615 105.346 26.6865 104.796 26.6031C104.245 26.503 103.787 26.4113 103.42 26.3279L103.545 23.5765C103.979 23.6265 104.47 23.6849 105.021 23.7516C105.571 23.8183 106.113 23.8766 106.647 23.9267C107.18 23.9767 107.614 24.0017 107.947 24.0017C108.398 24.0017 108.764 23.9684 109.048 23.9017C109.331 23.8349 109.54 23.7182 109.673 23.5515C109.823 23.3847 109.898 23.1513 109.898 22.8511C109.898 22.6343 109.823 22.4592 109.673 22.3258C109.54 22.1924 109.29 22.084 108.923 22.0006C108.573 21.9006 108.047 21.8005 107.347 21.7005C106.413 21.5671 105.646 21.3753 105.046 21.1252C104.445 20.8584 104.004 20.4748 103.72 19.9746C103.453 19.4576 103.32 18.7739 103.32 17.9235C103.32 16.8395 103.545 15.9974 103.995 15.3971C104.462 14.7968 105.079 14.3799 105.846 14.1464C106.613 13.8963 107.455 13.7712 108.373 13.7712C109.006 13.7712 109.64 13.8046 110.274 13.8713C110.924 13.9213 111.524 13.988 112.075 14.0714C112.625 14.1548 113.083 14.2382 113.45 14.3215L113.325 17.1731C112.908 17.1064 112.416 17.048 111.849 16.998C111.299 16.9313 110.749 16.8812 110.199 16.8479C109.665 16.8145 109.215 16.7979 108.848 16.7979C108.498 16.7979 108.189 16.8312 107.922 16.8979C107.672 16.9479 107.48 17.048 107.347 17.1981C107.214 17.3315 107.147 17.5316 107.147 17.7984C107.147 17.9985 107.205 18.1653 107.322 18.2987C107.439 18.4154 107.672 18.5238 108.022 18.6238C108.373 18.7072 108.881 18.7906 109.548 18.874C110.565 19.0074 111.382 19.2158 111.999 19.4993C112.616 19.7828 113.058 20.183 113.325 20.6999C113.592 21.2002 113.725 21.8839 113.725 22.751C113.725 24.2852 113.275 25.3691 112.375 26.0028C111.474 26.6198 110.182 26.9283 108.498 26.9283Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M94.4583 26.9283C93.0909 26.9283 92.0653 26.5948 91.3816 25.9277C90.7146 25.2607 90.3811 24.2435 90.3811 22.8761C90.3811 21.9089 90.5562 21.1669 90.9064 20.6499C91.2732 20.1163 91.7985 19.7328 92.4822 19.4993C93.1659 19.2658 93.9914 19.1241 94.9585 19.0741L97.76 18.849V18.1986C97.76 17.6983 97.6183 17.3482 97.3348 17.148C97.068 16.9313 96.6678 16.8229 96.1342 16.8229C95.6506 16.8229 95.1003 16.8395 94.4833 16.8729C93.8663 16.9062 93.2576 16.9479 92.6573 16.998C92.057 17.048 91.5401 17.098 91.1065 17.148L90.9814 14.4966C91.4317 14.3799 91.9653 14.2715 92.5823 14.1715C93.216 14.0547 93.8746 13.963 94.5583 13.8963C95.242 13.8129 95.884 13.7712 96.4844 13.7712C97.5683 13.7712 98.4854 13.9046 99.2358 14.1715C100.003 14.4216 100.587 14.8552 100.987 15.4721C101.387 16.0725 101.587 16.9146 101.587 17.9985V23.5014C101.637 23.7015 101.754 23.86 101.937 23.9767C102.137 24.0767 102.354 24.1518 102.588 24.2018L102.513 26.7532C102.129 26.7865 101.72 26.8115 101.287 26.8282C100.87 26.8449 100.537 26.8366 100.286 26.8032C99.8528 26.7532 99.4776 26.6531 99.1608 26.503C98.8606 26.3363 98.6355 26.1695 98.4854 26.0028C98.2186 26.1195 97.8684 26.2529 97.4349 26.403C97.0013 26.5531 96.5261 26.6781 96.0091 26.7782C95.5088 26.8782 94.9919 26.9283 94.4583 26.9283ZM95.4088 24.1518C95.6923 24.1518 95.9758 24.1184 96.2592 24.0517C96.5594 23.985 96.8429 23.91 97.1097 23.8266C97.3765 23.7432 97.5933 23.6682 97.76 23.6015V21.1252L95.5589 21.3253C95.092 21.3753 94.7501 21.5254 94.5333 21.7755C94.3165 22.009 94.2081 22.3425 94.2081 22.7761C94.2081 23.1929 94.3082 23.5265 94.5083 23.7766C94.7084 24.0267 95.0086 24.1518 95.4088 24.1518Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M70.2545 26.6281V14.0464H74.0565V14.8218C74.4401 14.5883 74.9487 14.3549 75.5824 14.1214C76.216 13.888 76.8247 13.7712 77.4083 13.7712C78.1587 13.7712 78.7674 13.8796 79.2343 14.0964C79.7179 14.2965 80.1098 14.5883 80.4099 14.9719C80.7101 14.7884 81.077 14.605 81.5105 14.4216C81.9608 14.2382 82.4444 14.0881 82.9613 13.9713C83.4782 13.8379 83.9869 13.7712 84.4871 13.7712C85.7378 13.7712 86.6966 13.9964 87.3637 14.4466C88.0307 14.8802 88.4893 15.5722 88.7394 16.5227C89.0062 17.4565 89.1396 18.6572 89.1396 20.1246V26.6281H85.3376V20.4998C85.3376 19.7161 85.2959 19.0741 85.2125 18.5738C85.1291 18.0735 84.9624 17.7067 84.7122 17.4732C84.4621 17.2231 84.1036 17.098 83.6367 17.098C83.2198 17.098 82.8029 17.1564 82.386 17.2731C81.9691 17.3898 81.6439 17.5066 81.4105 17.6233C81.5105 17.9235 81.5772 18.3403 81.6106 18.874C81.6439 19.3909 81.6606 19.9245 81.6606 20.4748V26.6281H77.8336V20.5499C77.8336 19.7328 77.7919 19.0741 77.7085 18.5738C77.6251 18.0735 77.4584 17.7067 77.2082 17.4732C76.9748 17.2231 76.6246 17.098 76.1577 17.098C75.7575 17.098 75.3572 17.1564 74.957 17.2731C74.5735 17.3732 74.2817 17.4816 74.0816 17.5983V26.6281H70.2545Z" className="fill-[#161919] dark:fill-white" />
                            <path d="M106.914 48.8148C106.23 48.8148 105.497 48.7732 104.713 48.6898C103.929 48.6064 103.179 48.5063 102.462 48.3896C101.745 48.2729 101.136 48.1645 100.636 48.0644L100.861 44.9878C101.378 45.0545 101.987 45.1295 102.687 45.2129C103.387 45.2796 104.088 45.3463 104.788 45.413C105.488 45.4631 106.097 45.4881 106.614 45.4881C107.464 45.4881 108.081 45.3296 108.465 45.0128C108.849 44.696 109.04 44.204 109.04 43.537C109.04 43.1702 108.957 42.8783 108.79 42.6616C108.64 42.4448 108.357 42.2697 107.94 42.1363C107.539 41.9862 106.956 41.8445 106.189 41.711C104.805 41.4609 103.696 41.1524 102.862 40.7856C102.028 40.402 101.428 39.8684 101.061 39.1847C100.694 38.501 100.511 37.6005 100.511 36.4833C100.511 35.1159 100.753 34.0486 101.236 33.2815C101.736 32.5145 102.445 31.9725 103.362 31.6557C104.279 31.3388 105.363 31.1804 106.614 31.1804C107.198 31.1804 107.856 31.2138 108.59 31.2805C109.324 31.3472 110.041 31.4222 110.741 31.5056C111.442 31.589 112.05 31.6807 112.567 31.7807L112.392 34.9074C111.892 34.8407 111.308 34.7823 110.641 34.7323C109.974 34.6656 109.307 34.6156 108.64 34.5822C107.99 34.5322 107.423 34.5072 106.939 34.5072C106.089 34.5072 105.463 34.6323 105.063 34.8824C104.68 35.1325 104.488 35.5327 104.488 36.083C104.488 36.4999 104.571 36.8251 104.738 37.0586C104.921 37.2753 105.222 37.4588 105.638 37.6089C106.072 37.7589 106.672 37.9174 107.439 38.0841C108.473 38.3176 109.34 38.5594 110.041 38.8095C110.758 39.0596 111.333 39.3681 111.767 39.735C112.217 40.0852 112.534 40.5438 112.717 41.1107C112.917 41.6777 113.017 42.3947 113.017 43.2619C113.017 44.5959 112.776 45.6715 112.292 46.4886C111.825 47.3057 111.133 47.8977 110.216 48.2645C109.315 48.6314 108.215 48.8148 106.914 48.8148Z" fill="#4F56D3" />
                            <path d="M91.9053 48.8149C90.0876 48.8149 88.6285 48.498 87.5279 47.8643C86.444 47.2307 85.6603 46.2635 85.1767 44.9628C84.6931 43.6621 84.4513 42.0279 84.4513 40.0602C84.4513 38.0758 84.6931 36.4332 85.1767 35.1325C85.6603 33.8152 86.444 32.8313 87.5279 32.181C88.6285 31.5306 90.0876 31.2054 91.9053 31.2054C93.7229 31.2054 95.1737 31.5306 96.2576 32.181C97.3415 32.8313 98.1253 33.8152 98.6089 35.1325C99.0924 36.4332 99.3342 38.0758 99.3342 40.0602C99.3342 42.0612 99.0924 43.7121 98.6089 45.0128C98.1253 46.2968 97.3415 47.2557 96.2576 47.8894C95.1904 48.5064 93.7396 48.8149 91.9053 48.8149ZM91.9053 45.5131C92.8725 45.5131 93.5978 45.313 94.0814 44.9128C94.565 44.5126 94.8902 43.9039 95.057 43.0868C95.2237 42.2697 95.3071 41.2608 95.3071 40.0602C95.3071 38.8595 95.2237 37.8423 95.057 37.0085C94.8902 36.1748 94.565 35.5494 94.0814 35.1325C93.5978 34.699 92.8725 34.4822 91.9053 34.4822C90.9548 34.4822 90.2294 34.699 89.7291 35.1325C89.2455 35.5494 88.912 36.1748 88.7286 37.0085C88.5618 37.8256 88.4784 38.8429 88.4784 40.0602C88.4784 41.2441 88.5618 42.2447 88.7286 43.0618C88.912 43.8789 89.2455 44.4959 89.7291 44.9128C90.2127 45.313 90.9381 45.5131 91.9053 45.5131Z" fill="#4F56D3" />
                            <path d="M70.4297 48.5147V31.5056H76.8831C78.3673 31.5056 79.5929 31.6974 80.5601 32.0809C81.544 32.4645 82.2777 33.0981 82.7613 33.9819C83.2615 34.8491 83.5117 36.0497 83.5117 37.5839C83.5117 39.0847 83.2615 40.302 82.7613 41.2358C82.2777 42.153 81.544 42.82 80.5601 43.2369C79.5929 43.6538 78.3673 43.8622 76.8831 43.8622H74.3818V48.5147H70.4297ZM74.3818 40.6605H76.7581C77.7253 40.6605 78.4173 40.4104 78.8342 39.9101C79.2677 39.3932 79.4845 38.6177 79.4845 37.5839C79.4845 36.5333 79.2761 35.7912 78.8592 35.3577C78.4423 34.9241 77.7419 34.7073 76.7581 34.7073H74.3818V40.6605Z" fill="#4F56D3" />
                            <defs>
                                <linearGradient id="paint0_linear_5_4777" x1="28.2391" y1="0.260864" x2="47.7893" y2="68.1434" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#161919" />
                                    <stop offset="1" stop-color="#5B5C7A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    )}
                </div>
                <button className=" text-white  rounded-md cursor-pointer max-[800px]:hidden">
                    <span className="material-symbols-outlined text-[#3F4059] w-[25px] h-[25px]">menu</span>
                </button>
            </header>
            <menu className="w-full h-full px-6 max-[800px]:px-2 max-[800px]:w-[130px]  max-[800px]:w-[130px]  justify-center ">
                <button className="flex justify-center items-center h-[50px] w-full border border-gray-200 px-4 mt-[10px] bg-red rounded-lg max-[800px]:w-[50px] max-[800px]:h-[50px] max-[800px]:px-0 max-[800px]:justify-center max-[800px]:items-center bg-red">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#D1D5DB" strokeWidth="2" />
                        <line x1="16.4142" y1="16.5858" x2="20" y2="20.1716" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search here" 
                        className="w-full h-full outline-none bg-transparent text-gray-400 placeholder-gray-400 text-base max-[800px]:hidden" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </button>

                {!searchTerm && (
                    <>
                        <p className="w-full h-full text-[#C7C7C7] text-base font-bold my-8 max-[800px]:hidden">MAIN MENU</p>
                        <div className="hidden max-[800px]:block w-full h-px bg-gray-200 my-4"></div>
                    </>
                )}

                {filteredButtons.slice(0, 7).map((button, index) => {
                    if (button.text === "Products") {
                        return (
                            <div key={index} className={productsOpen ? "rounded-lg p-1" : ""}>
                                <button 
                                    className={`w-full justify-center ${productsOpen ? "bg-[#4F56D3] text-white" : ""} flex items-center gap-2 h-[50px] rounded-md`} 
                                    onClick={() => setProductsOpen(!productsOpen)}
                                >
                                    <span className="material-symbols-outlined text-[#CDFF65] w-[25px] h-[25px]">{button.icon}</span>
                                    <span className={productsOpen ? "text-white max-[800px]:hidden" : "text-[#878787] max-[800px]:hidden"}>{button.text}</span>
                                    {!isTablet && (
                                        <span className={`material-symbols-outlined ml-auto transition-transform ${productsOpen ? "rotate-180" : ""} ${productsOpen ? "text-white" : "text-[#878787]"}`}>expand_more</span>
                                    )}
                                </button>
                                {productsOpen && button.subItems && (
                                    <div className="bg-[#F5F5F5] rounded-b-lg flex flex-col">
                                        {button.subItems.map((subItem, subIndex) => (
                                            <SidebarButton key={subIndex} icon={subItem.icon} text={subItem.text} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return <SidebarButton key={index} icon={button.icon} text={button.text} count={button.count} />;
                })}

                {!searchTerm && (
                    <>
                        <p className="w-full h-full text-[#C7C7C7] text-base font-bold my-8 max-[800px]:hidden">ANALYTICS</p>
                        <div className="hidden max-[800px]:block w-full h-px bg-gray-200 pl-20"></div>
                    </>
                )}

                {filteredButtons.slice(7, 14).map((button, index) => (
                    <SidebarButton key={index} icon={button.icon} text={button.text} count={button.count} />
                ))}

                {!searchTerm && (
                    <>
                        <p className="w-full h-full text-[#C7C7C7] text-base font-bold my-8 max-[800px]:hidden">APPS</p>
                        <div className="hidden max-[800px]:block w-full h-px bg-gray-200 my-4"></div>
                    </>
                )}

                {filteredButtons.slice(14, 17).map((button, index) => (
                    <SidebarButton key={index} icon={button.icon} text={button.text} count={button.count} />
                ))}

                {!searchTerm && (
                    <>
                        <p className="w-full h-full text-[#C7C7C7] text-base font-bold my-8 max-[800px]:hidden">SETTİNGS</p>
                        <div className="hidden max-[800px]:block w-full h-px bg-gray-200 my-4"></div>
                    </>
                )}

                {filteredButtons.slice(17).map((button, index) => (
                    <SidebarButton key={index} icon={button.icon} text={button.text} count={button.count} />
                ))}
            </menu>
        </div>
    )
}
