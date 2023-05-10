import { NextResponse } from "next/server"
import { supabase } from "@/config/supabase"

export async function GET() {

    const { data: history, error } = await supabase
        .from('history')
        .select('*')

    if (error) {
        return NextResponse.json({
            message: "today history",
            value: []
        })    
    }

    return NextResponse.json({
        message: "today value",
        value: history?.map( valueHistory => valueHistory?.value )
    })


}