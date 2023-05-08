import Image from "next/image"
import ColombiaFlag from "../assets/colombia.png"
import { useCurrentValueDollar } from "@/hooks/useDollar"

async function CardDollar() {

    const dollarValue = await useCurrentValueDollar() 

    return (
        <div
            className="
    rounded-lg 
    bg-white p-2 
    shadow-md
    w-full h-[45%] bg-clip-border
    flex flex-col justify-center
    md:w-[80%] md:px-6
    lg:w-[75%]
  ">
            <div
                className="w-[90%] py-1"
            >
                <Image
                    src={ColombiaFlag}
                    alt="Bander Colombia"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </div>

            <p className="bg-green-400 text-white w-[60px] rounded-md px-1" >1 USD</p>

            <h1 className="text-slate-800 w-[90%] text-center text-6xl font-semibold mb-3 lg:text-8xl" >{dollarValue}</h1>

            <p className="text-slate-800 italic text-sm lg:w-[80%] text-center self-center" >
                * Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit perspiciatis et rerum molestias aut voluptatem consequuntur vitae minus optio nulla a ipsa quae architecto ut eos,
                repudiandae consequatur nam quibusdam?
            </p>

        </div>
    )
}

export default CardDollar