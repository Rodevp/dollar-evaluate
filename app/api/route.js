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

    const writeTxt = fs.createWriteStream("./app/api/dolarToday.txt", { flags: 'a' })
    writeTxt.write(`${valueDollar.text()}\n`)
    writeTxt.end()

    return NextResponse.json({
        message: "value dollar",
        value: valueDollar.text()
    })

}