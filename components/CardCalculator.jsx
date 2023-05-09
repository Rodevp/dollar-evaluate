'use client'
import { useEffect, useState } from "react"


const getDollarForCalculate = async () => {
    const response  = await fetch('/api/today')
    const data = await response.json()

    return data?.value
}


function CardCalculator() {

    const [currentMoney, setCurrentMoney] = useState('0')
    const [currentDollar, setCurrentDollar] = useState('0')

    const  handleCurrentMoney = (e) => {
        setCurrentMoney(e.target.value)
    }

    useEffect(() => {

        getDollarForCalculate()
            .then((value) => {
                setCurrentDollar( value )
            })
            .catch(err => setCurrentDollar('0'))

    }, [])

    const value = currentDollar?.replace('.', '')
    
    const resultOperation = Number(currentMoney) * Number(value)
    
    const resultConvert = Number(resultOperation).toLocaleString("en", {currency: "COP"}) 

    return (
        <div
            className="w-full h-[45%] rounded-lg p-2 bg-white bg-clip-border shadow-md md:h-[65%] md:flex md:flex-col md:justify-center"
        >
            <p
                className="text-slate-800 border mb-2 px-2 text-1xl border-none"
            >
                El valor se calcula colocando de dolares a pesos, esté automaticamente irá procesando
                a medida que su valor vaya cambiando.💰
            </p>
            <div>
                <input
                    onChange={handleCurrentMoney}
                    placeholder="Escribe tu valor en dolares: 2000"
                    type="text"
                    className="w-full p-4 mb-2 text-slate-800 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>
            <h3
                className="text-slate-800 text-2xl mb-2 px-1"
            >
               Valor: { resultConvert } COP
            </h3>
        </div>
    )
}

export default CardCalculator