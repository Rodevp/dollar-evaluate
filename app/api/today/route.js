import { NextResponse } from "next/server"
import fs from "fs"


export async function GET() {

    const PATH = "./app/api/dolarToday.txt"

    try {
        const data = fs.readFileSync(PATH, 'utf8');

        return NextResponse.json({
            message: "today value",
            value: data?.toString()
        })

    } catch (e) {
        return NextResponse.json({
            message: "today value",
            value: 0
        })
    }
    

}