import prisma from "@/prisma";
import { NextRequest } from "next/server";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = isNaN(Number(searchParams.get("page")))
    ? 0
    : Number(searchParams.get("page"));

  const limit = SERVERS_LIMIT_PER_PAGE;

  const servers = await prisma.server.findMany({
    skip: limit * Math.max(0, page - 1),
    take: limit,
    orderBy: [
      {
        online: "desc",
      },
      {
        currentPlayers: "desc",
      },
      {
        maxPlayers: "desc",
      },
    ],
    select: {
      id: true,
      name: true,
      version: true,
      maxPlayers: true,
      currentPlayers: true,
      online: true,
      motdFirstLine: true,
      motdSecondLine: true,
      icon: true,
    },
  });

  const pagesCount = Math.ceil(
    (await prisma.server.count()) / SERVERS_LIMIT_PER_PAGE,
  );

  const currentPage = page === 0 ? 1 : page;

  return Response.json({
    page: currentPage,
    nextPage: currentPage >= pagesCount ? null : currentPage + 1,
    prevPage: currentPage > 1 ? currentPage - 1 : null,
    lastPage: pagesCount,
    data: servers,
  });
}
