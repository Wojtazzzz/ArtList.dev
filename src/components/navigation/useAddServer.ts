import { addServer, AddServerPayload } from "@/actions/addServer";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@/hooks/useNotification";

export const useAddServer = (onSuccess: () => void) => {
  const { notify } = useNotification();

  const { mutate, isError, reset } = useMutation({
    mutationFn: async (data: AddServerPayload) => {
      const response = await addServer(data);

      if (response.error) {
        throw new Error(response.error);
      }
    },
    onSuccess: () => {
      notify({
        title: "Serwer został dodany",
        description: "Powinien znajdować się już na liście",
      });

      onSuccess();
    },
    onError: (error) => {
      notify({
        title: "Wystąpił problem",
        description: error.message,
      });
    },
  });

  const handleAddServer = (formData: FormData) => {
    mutate({
      name: String(formData.get("name")),
    });
  };

  const resetRequestState = () => {
    reset();
  };

  return {
    addServer: handleAddServer,
    resetRequestState,
    isError,
  };
};
