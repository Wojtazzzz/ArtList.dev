"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Label } from "@/components/ui-library/label";
import { Input } from "@/components/ui-library/input";
import { FormStatusButton } from "@/components/ui/FormStatusButton";
import { useAddServer } from "@/components/navigations/root/useAddServer";
import { useAddServerDialog } from "@/components/navigations/root/useAddServerDialog";

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

          <div className="mt-5 flex items-center gap-4">
            <Label htmlFor="server-name" className="text-right">
              Nazwa
            </Label>
            <Input
              id="server-name"
              name="name"
              className="col-span-3"
              aria-invalid={isError}
            />
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
