import { connectionstr } from "@/app/lib/db";
import { resModel } from "@/app/lib/model/resModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Result } from "postcss";

export async function GET() {

   await mongoose.connect(connectionstr);
   const data = await resModel.find();
   console.log(data)
    return NextResponse.json({ Result: data });
}

export async function POST() {
    return NextResponse.json({ name: "Shukla" });

}
