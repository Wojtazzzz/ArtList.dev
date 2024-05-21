import { useRouter, useSearchParams } from "next/navigation";

export const useServersSort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortByName = async () => {
    const sort = searchParams.get("sort");

    if (sort === "name") {
      router.push("/search?sort=-name");
    } else {
      router.push("/search?sort=name");
    }
  };

  const sortByPlayers = async () => {
    const sort = searchParams.get("sort");

    if (sort === "players") {
      router.push("/search?sort=-players");
    } else {
      router.push("/search?sort=players");
    }
  };

  return {
    sortByName,
    sortByPlayers,
  };
};
