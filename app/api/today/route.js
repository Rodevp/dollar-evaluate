import { NextResponse } from "next/server"

export async function GET() {

    const { data, error } = supabase
        .from('history')
        .select('*')

    if (error) {
        return NextResponse.json({
            message: "today value",
            value: '0'
        })    
    }

    const dollarToday = data[0]

    return NextResponse.json({
        message: "today value",
        value: dollarToday
    })


}