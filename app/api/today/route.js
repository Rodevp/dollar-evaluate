import { NextResponse } from "next/server"
import { supabase } from "@/config/supabase"

export async function GET() {

    const { data, error } = await supabase
        .from('history')
        .select('*')

    if (error) {

        console.log('error in today -> ', error?.message)

        return NextResponse.json({
            message: "today value",
            value: '0'
        })    
    }

    const dollarToday = data[0]

    return NextResponse.json({
        message: "today value",
        value: dollarToday?.value
    })


}