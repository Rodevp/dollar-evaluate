import { NextResponse } from "next/server"
import chieero from "cheerio"
import dotenv from "dotenv" 

dotenv.config()

export async function GET() {

    const response = await fetch(process.env.URL_PAGE)
    const page = await response.text()

    const scrap = chieero.load( page )

    const valueDollar = scrap('span.exchange-rate')

    return NextResponse.json({
        message: "value dollar",
        value: valueDollar.text()
    })

}