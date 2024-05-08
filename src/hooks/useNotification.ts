import { useToast } from "@/components/ui-library/use-toast";

type NotifyArguments = {
  title: string;
  description?: string;
};

export const useNotification = () => {
  const { toast } = useToast();

  const notify = ({ title, description }: NotifyArguments) =>
    toast({
      title,
      description,
    });

  return {
    notify,
  };
};
