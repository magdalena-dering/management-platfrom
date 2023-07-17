import * as bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { signInAccessToken } from "../../lib/jwt";

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
    const { password, ...userWithoutPass } = user;
    const accessToken = signInAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
