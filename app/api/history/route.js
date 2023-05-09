import { NextResponse } from "next/server"
import fs from "fs"


export async function GET() {

    const PATH = "./app/api/dollarHistory.txt"

    try {

        const data = fs.readFileSync(PATH, 'utf8');
        const history = data?.split('\n')
        
        return NextResponse.json({
            message: "today value",
            value: history
        })

    } catch (e) {
        return NextResponse.json({
            message: "today value",
            value: 0
        })
    }
    

}