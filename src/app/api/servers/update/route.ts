import { NextRequest } from "next/server";
import { updateServers } from "@/services/updateServers";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return Response.json({
      status: "unauthorized",
    });
  }

  await updateServers();

  return Response.json({
    status: "ok",
  });
}
