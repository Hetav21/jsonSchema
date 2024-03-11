"use server"

import { NextRequest, NextResponse } from "next/server";
import main from "./step1";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    const schema = body.data;

    var d;

    main(schema).then((data)=>{
        console.log(data);
        d = data;
    });

    return NextResponse.json({ d});
}