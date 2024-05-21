import { Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";

type CopyButtonProps = {
  label: string;
  onClick: () => void;
};

export const CopyButton = ({ label, onClick }: CopyButtonProps) => {
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      <span className="sr-only">{label}</span>
      <Copy size={16} />
    </Button>
  );
};
