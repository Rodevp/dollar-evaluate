import { NextResponse } from "next/server"
import chieero from "cheerio"
import dotenv from "dotenv"
import { supabase } from "@/config/supabase"
import axios from "axios"

dotenv.config()

export async function GET() {

    const responseAxios = await axios(process.env.URL_PAGE)

    const page = await responseAxios.data

    const scrap = chieero.load(page)

    const valueDollar = scrap('span.exchange-rate')

    const parseDecimal = valueDollar?.text()?.replace(',', '.')

    const { error: errorHistory } = await supabase
        .from('history')
        .insert({ value: parseDecimal })


    if (errorHistory) {
        console.log('error history', errorHistory?.message)
        return NextResponse.json({
            message: "value dollar",
            value: '0'
        })
    }

    return NextResponse.json({
        message: "value dollar",
        value: parseDecimal
    })

}