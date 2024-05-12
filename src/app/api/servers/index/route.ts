import { NextRequest } from "next/server";
import { getPaginatedServers } from "@/services/getPaginatedServers";
import { getPageParam } from "@/utils/getPageParam";
import { getLimitParam } from "@/utils/getLimitParam";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const pageParam = getPageParam(request.nextUrl.searchParams.get("page"));
  const limitParam = getLimitParam(request.nextUrl.searchParams.get("limit"));

  const { servers, page, nextPage, prevPage, lastPage } =
    await getPaginatedServers(pageParam, limitParam);

  return Response.json({
    page,
    nextPage,
    prevPage,
    lastPage,
    data: servers,
  });
}
