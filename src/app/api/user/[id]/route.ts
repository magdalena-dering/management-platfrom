import { verifyJwt } from "@/src/app/lib/jwt";
import { prisma } from "@/src/app/lib/prisma";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) {
  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      { status: 401 }
    );
  }

  const driverRoute = await prisma.routes.findMany({
    where: {
      driverId: +params.id,
    },
  });

  return new Response(JSON.stringify(driverRoute));
}
