import { NextRequest } from "next/server";
import { updateServers } from "@/services/updateServers";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/(servers-list)", "layout");

  return Response.json({
    status: "ok",
  });
}
