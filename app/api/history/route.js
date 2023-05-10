import { NextResponse } from "next/server"
import { supabase } from "@/config/supabase"

export async function GET() {

    const { data, error } = supabase
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
        value: data?.map( valueHistory => valueHistory?.value )
    })


}