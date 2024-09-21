'use client';

import { Button } from '@/components/ui/Button';
import { useCopyServerAddress } from '@/hooks/useCopyServerAddress';

type CopyServerAddressProps = {
	address: string;
};

export const CopyServerAddress = ({ address }: CopyServerAddressProps) => {
	const { copyIp } = useCopyServerAddress();

	return <Button onClick={() => copyIp(address)}>Skopiuj adres IP</Button>;
};
