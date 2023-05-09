import { NextResponse } from "next/server"
import chieero from "cheerio"
import dotenv from "dotenv" 
import fs from "fs"
import axios from "axios"

dotenv.config()

export async function GET() {

    const response = await axios(process.env.URL_PAGE)
    const page = await response.data

    const scrap = chieero.load( page )

    const valueDollar = scrap('span.exchange-rate')

    const parseDecimal = valueDollar?.text()?.replace(',', '.')

    const writeTxt = fs.createWriteStream("./app/api/dollarHistory.txt", { flags: 'a' })
    writeTxt.write(`${parseDecimal}\n`)
    writeTxt.end()

    const current = fs.createWriteStream("./app/api/dolarToday.txt")
    current.write(parseDecimal)
    current.end()
    
    try {

        const PATH_HISTORY = "./app/api/dollarHistory.txt"
        
        const data = fs.readFileSync(PATH_HISTORY, 'utf8');
        const history = data?.split('\n')

        if ( history.length >= 60 ) {
            fs.truncate(PATH_HISTORY, 0, function() { console.log('done') } )
        }

    } catch (error) {
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