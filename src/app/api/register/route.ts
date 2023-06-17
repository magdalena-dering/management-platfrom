
import * as bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

interface RequestBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    type: string
}

export async function POST(request: Request) {
    const { firstName, lastName, email, password, type }: RequestBody = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        type,
    };

    const user = await prisma.driver.create({
        data: userData,
    });

    const { password: _, ...result } = user; 
    return new Response(JSON.stringify(result));
}
