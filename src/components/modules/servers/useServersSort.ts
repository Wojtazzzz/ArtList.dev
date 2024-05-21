import { useRouter } from "next/navigation";

export const useServersSort = (sort: string) => {
  const router = useRouter();

  const sortByName = async () => {
    if (sort === "name") {
      router.push("/search?sort=-name");
    } else {
      router.push("/search?sort=name");
    }
  };

  const sortByPlayers = async () => {
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
