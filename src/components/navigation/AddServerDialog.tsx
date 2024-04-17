"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-library/dialog";
import { Button } from "@/components/ui/Button";
import { addServer, initialState } from "@/actions/addServer";
import { Label } from "@/components/ui-library/label";
import { Input } from "@/components/ui-library/input";
import { useFormState } from "react-dom";

export const AddServerDialog = () => {
  const [state, formAction] = useFormState(addServer, initialState);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Dodaj serwer</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Dodaj serwer</DialogTitle>
            <DialogDescription>
              Wpisz nazwę serwera, a my postaramy się go znaleźć w bazie danych.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nazwa
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue=""
                className="col-span-3"
              />
            </div>
          </div>

          {state.status === "error" ? <div>{state.error}</div> : null}
          {state.status === "ok" ? <div>Serwer został dodany</div> : null}

          <DialogFooter>
            <Button type="submit">Dodaj</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
