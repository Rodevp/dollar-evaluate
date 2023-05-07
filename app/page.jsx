
import CardCalculator from "@/components/CardCalculator"
import CardDollar from "@/components/CardDollar"

export const metadata = {
  title: "Dolar hoy"
}

export default function Home() {
  return (
    <main className="h-screen  bg-slate-100 flex justify-center">
      <section
        className="flex flex-col gap-5 w-11/12 justify-center items-center py-4 h-full"
      >

      <CardDollar /> 

        <section
          className="
            h-[55%] w-full 
            flex flex-col justify-center gap-4 
            md:w-[80%] md:flex-row
            lg:w-[75%]  
          "
        >
          <CardCalculator />
         
        </section>

      </section>
    </main>
  )
}
