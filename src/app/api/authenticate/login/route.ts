 // import { userTable } from "@/lib/db/schema";
 import { NextResponse } from "next/server";
 import bcryptjs, { compare } from "bcryptjs";
 import * as schema from "@/lib/db/schema";
 import { drizzle } from "drizzle-orm/vercel-postgres";
 import { sql } from "@vercel/postgres";
 import { eq } from "drizzle-orm";
 import jwt from "jsonwebtoken";
 
 const db = drizzle(sql, { schema });
 
 export async function POST(request: Request) {
   try {
     const reqBody = await request.json();
 
     const user = await db.query.UsersTable.findFirst({
       where: eq(schema.UsersTable.email, reqBody.email),
     });
 
     if (!user) {
       console.error("Login User does not exist");
       return NextResponse.json(
         { error: "User does not exist" },
         { status: 400 }
       );
     }
 
     // Check if the user logged in via Google or LinkedIn
     if (!user.password) {
       console.error("User logged in via Google/LinkedIn. Cannot login with email/password.");
       return NextResponse.json(
         { error: "User logged in via Google/LinkedIn. Cannot login with email/password." },
         { status: 400 }
       );
     }
 
     // Validate password if the user logged in with email/password credentials
     const validPassword = await bcryptjs.compare(reqBody.password, user.password);
 
     if (!validPassword) {
       console.error("Invalid Password");
       return NextResponse.json(
         { error: "Invalid password" },
         { status: 400 }
       );
     }
 
     const { password, ...result } = user;
 
     const token = await jwt.sign(result, process.env.TOKEN_SECRET!, {
       expiresIn: "1d",
     });
 
     const response = NextResponse.json({
       message: "Login successful",
       success: true,
     });
 
     response.cookies.set("JwtToken", token, {
       httpOnly: true,
     });
 
     return response;
   } catch (error: any) {
     return NextResponse.json({ error: error.message }, { status: 500 });
   }
 }