import prisma from "@/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const servers = await prisma.server.findMany();
  return Response.json(servers);
}
