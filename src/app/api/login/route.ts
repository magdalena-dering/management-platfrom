
import * as bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const { email, password }: RequestBody = await request.json();

    const user = await prisma.driver.findFirst({
        where: {
            email,
        },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
        const { password: _, ...userWithoutPass } = user;
        return new Response(JSON.stringify(userWithoutPass));
    } else {
        return new Response(JSON.stringify(null));
    }
}
