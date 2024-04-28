import { useFormState } from "react-dom";
import { addServer, initialState } from "@/actions/addServer";

export const useAddServerDialog = () => {
  const [state, addServerAction] = useFormState(addServer, initialState);

  return {
    state,
    addServerAction,
  };
};
