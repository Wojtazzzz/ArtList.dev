'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/Dialog';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { FormStatusButton } from '@/components/ui/FormStatusButton';
import { useAddServer } from '@/components/navigations/root/useAddServer';
import { useAddServerDialog } from '@/components/navigations/root/useAddServerDialog';

export const AddServerDialog = () => {
	const { open, closeDialog, setDialogOpen } = useAddServerDialog();
	const { addServer, isError, resetRequestState } = useAddServer(closeDialog);

	return (
		<Dialog
			open={open}
			setOpen={setDialogOpen}
			onOpenChangeCallback={resetRequestState}
		>
			<DialogTrigger>Dodaj serwer</DialogTrigger>

			<DialogContent>
				<form action={addServer}>
					<DialogHeader>
						<DialogTitle>Dodaj serwer</DialogTitle>
						<DialogDescription>
							Wpisz nazwę serwera, a my postaramy się go znaleźć w bazie danych.
						</DialogDescription>
					</DialogHeader>

					<div className="mt-10">
						<Label>
							<span className="mb-3 block cursor-pointer">Nazwa serwera</span>

							<Input
								type="text"
								name="name"
								isInvalid={isError}
								placeholder="Hypixel.net"
							/>
						</Label>
					</div>

					<div className="mt-5">
						<DialogFooter>
							<FormStatusButton type="submit">Dodaj</FormStatusButton>
						</DialogFooter>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};
