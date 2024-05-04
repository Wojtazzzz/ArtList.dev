import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  revalidateTag("servers");

  return Response.json({});
}
