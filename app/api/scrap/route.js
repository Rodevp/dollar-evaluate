import { NextResponse } from "next/server"
import chieero from "cheerio"
import dotenv from "dotenv"
import { supabase } from "@/config/supabase"

dotenv.config()

export async function GET() {

    const response = await fetch(process.env.URL_PAGE)

    const page = await response.text()

    const scrap = chieero.load(page)

    const valueDollar = scrap('span.exchange-rate')

    const parseDecimal = valueDollar?.text()?.replace(',', '.')

    const { data: today, error } = await supabase
        .from('today')
        .select('*')

    if (today?.length > 0) {
        const row = today[0]

        const { error } = await supabase
            .from('today')
            .update({ id: row?.id, value: parseDecimal })

    } else {
        const { error } = await supabase
            .from('today')
            .insert({ value: parseDecimal })
    }

    const { error: errorHistory } = await supabase
        .from('history')
        .insert({ value: parseDecimal })

    if (error) {
        console.log('error today', error?.message)
        return NextResponse.json({
            message: "value dollar",
            value: '0'
        })
    }

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