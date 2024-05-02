import { useToast } from "@/components/ui-library/use-toast";
import { capitalize } from "@/utils/capitalize";

export const useCopyToClipboard = () => {
  const { toast } = useToast();

  const copyIp = async (ip: string) => {
    toast({
      title: capitalize(ip),
      description: `Adres serwera został skopiowany do schowka`,
    });

    await navigator.clipboard.writeText(ip);
  };

  return {
    copyIp,
  };
};
