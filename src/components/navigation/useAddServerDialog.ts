import { useBoolean } from "@/hooks/useBoolean";

export const useAddServerDialog = () => {
  const { state, setTrue, setFalse, setOwn } = useBoolean();

  const openDialog = () => {
    setTrue();
  };

  const closeDialog = () => {
    setFalse();
  };

  const setDialogOpen = (isOpen: boolean) => {
    setOwn(isOpen);
  };

  return {
    open: state,
    openDialog,
    closeDialog,
    setDialogOpen,
  };
};
