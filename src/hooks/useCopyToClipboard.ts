import { useNotification } from "@/hooks/useNotification";

type CopyTextArguments = {
  text: string;
  title: string;
  description?: string;
};

export const useCopyToClipboard = () => {
  const { notify } = useNotification();

  const copyText = async ({ text, title, description }: CopyTextArguments) => {
    await window.navigator.clipboard.writeText(text);

    notify({
      title,
      description,
    });
  };

  return {
    copyText,
  };
};
