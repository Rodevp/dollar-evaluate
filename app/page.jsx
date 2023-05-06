import Image from "next/image"

export const metadata = {
  title: "Dolar hoy"
}

export default function Home() {
  return (
    <main className="h-screen  bg-slate-100 flex justify-center">
      <section
        className="flex flex-col gap-5 w-11/12 bg-red-600 justify-center items-center py-4 h-full"
      >

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
              src=""
              alt="Bander Colombia"
              width={40}
              height={40}
              className="rounded-full bg-black"
            />
          </div>

          <p className="bg-green-400 text-white w-[20%] rounded-md px-1" >1 USD</p>

          <h1 className="text-slate-800 w-[90%] text-center text-6xl font-semibold mb-3" >5.000</h1>

          <p className="text-slate-800 italic text-sm" >
            * Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sit perspiciatis et rerum molestias aut voluptatem consequuntur vitae minus optio nulla a ipsa quae architecto ut eos,
            repudiandae consequatur nam quibusdam?
          </p>

        </div>

        <section
          className="
            h-[55%] w-full 
            flex flex-col justify-center gap-4 
            bg-orange-300
            md:w-[80%] md:flex-row
            lg:w-[75%]  
          "
        >
          <div
            className="w-full h-[45%] rounded-lg p-2 bg-slate-400 bg-clip-border shadow-md md:h-[65%]"
          >

          </div>
          <div
            className="w-full h-[45%] rounded-lg p-2 bg-slate-400 bg-clip-border shadow-md md:h-[65%]"
          >

          </div>
        </section>

      </section>
    </main>
  )
}
