'use client'
import LogoChange from "../assets/exchange.svg"
import Image from "next/image"


function CardCalculator() {
    return (
        <div
            className="w-full h-[45%] rounded-lg p-2 bg-white bg-clip-border shadow-md md:h-[65%] md:flex md:flex-col md:justify-center"
        >
            <div>
                <input
                    type="text"
                    className="w-full p-4 text-slate-800 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>
            <div
                className="w-full flex justify-center mb-2 mt-2"
            >
                <Image
                    src={LogoChange}
                    alt="change logo"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                />
            </div>
            <div>
                <input
                    type="text"
                    className="w-full p-4 text-slate-800 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
            </div>
        </div>
    )
}

export default CardCalculator