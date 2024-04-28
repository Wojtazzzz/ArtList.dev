import { useToast } from "@/components/ui-library/use-toast";

export const useCopyIp = () => {
  const { toast } = useToast();

  const copyIp = async (ip: string) => {
    const capitalizedTitle = ip[0].toUpperCase() + ip.slice(1);

    toast({
      title: capitalizedTitle,
      description: `Adres serwera został skopiowany do schowka`,
    });

    await navigator.clipboard.writeText(ip);
  };

  return {
    copyIp,
  };
};
