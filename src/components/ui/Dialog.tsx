import {
  Dialog as UIDialog,
  DialogContent as UIDialogContent,
  DialogDescription as UIDialogDescription,
  DialogFooter as UIDialogFooter,
  DialogHeader as UIDialogHeader,
  DialogTitle as UIDialogTitle,
  DialogTrigger as UIDialogTrigger,
} from "@/components/ui-library/dialog";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type DialogProps = {
  children: ReactNode;
};

export const Dialog = ({ children }: DialogProps) => {
  return <UIDialog>{children}</UIDialog>;
};

type DialogTriggerProps = {
  children: ReactNode;
};

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
  return (
    <UIDialogTrigger asChild>
      <Button variant="default">{children}</Button>
    </UIDialogTrigger>
  );
};

type DialogContentProps = {
  children: ReactNode;
};

export const DialogContent = ({ children }: DialogContentProps) => {
  return (
    <UIDialogContent className="sm:max-w-[425px]">{children}</UIDialogContent>
  );
};

type DialogHeaderProps = {
  children: ReactNode;
};

export const DialogHeader = ({ children }: DialogHeaderProps) => {
  return <UIDialogHeader>{children}</UIDialogHeader>;
};

type DialogTitleProps = {
  children: ReactNode;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <UIDialogTitle>{children}</UIDialogTitle>;
};

type DialogDescriptionProps = {
  children: ReactNode;
};

export const DialogDescription = ({ children }: DialogDescriptionProps) => {
  return <UIDialogDescription>{children}</UIDialogDescription>;
};

type DialogFooterProps = {
  children: ReactNode;
};

export const DialogFooter = ({ children }: DialogFooterProps) => {
  return <UIDialogFooter>{children}</UIDialogFooter>;
};
