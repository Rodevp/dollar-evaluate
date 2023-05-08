import { NextResponse } from "next/server"
import chieero from "cheerio"
import dotenv from "dotenv" 
import fs from "fs"

dotenv.config()

export async function GET() {

    const response = await fetch(process.env.URL_PAGE)
    const page = await response.text()

    const scrap = chieero.load( page )

    const valueDollar = scrap('span.exchange-rate')

    const parseDecimal = valueDollar.text().replace(',', '.')

    const writeTxt = fs.createWriteStream("./app/api/dollarHistory.txt", { flags: 'a' })
    writeTxt.write(`${parseDecimal}\n`)
    writeTxt.end()

    const current = fs.createWriteStream("./app/api/dolarToday.txt")
    current.write(parseDecimal)
    current.end()

    return NextResponse.json({
        message: "value dollar",
        value: parseDecimal
    })

}