"use client";

import { useCopyServerAddress } from "@/components/modules/servers/useCopyServerAddress";
import { Button } from "@/components/ui/Button";
import { Copy } from "lucide-react";

type CopyIpButtonProps = {
  ip: string;
};

export const CopyIpButton = ({ ip }: CopyIpButtonProps) => {
  const { copyIp } = useCopyServerAddress();

  return (
    <Button variant="outline" size="icon" onClick={() => copyIp(ip)}>
      <span className="sr-only">Skopiuj adres IP serwera do schowka</span>
      <Copy size={16} />
    </Button>
  );
};
