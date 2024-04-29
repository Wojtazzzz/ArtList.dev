import { useToast } from "@/components/ui-library/use-toast";
import { addServer } from "@/actions/addServer";
import { useMutation } from "@tanstack/react-query";

export const useAddServer = (onSuccess: () => void) => {
  const { toast } = useToast();

  const { mutate, isError, reset } = useMutation({
    mutationFn: addServer,
    onSuccess: () => {
      toast({
        title: "Serwer został dodany",
        description: "Za chwilę zobaczysz go na liście",
      });

      onSuccess();
    },
    onError: (error) => {
      toast({
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
