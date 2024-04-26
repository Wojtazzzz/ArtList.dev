import { useFormState } from "react-dom";
import { addServer, initialState } from "@/actions/addServer";
import { useEffect } from "react";

export const useServerAction = () => {
  const [state, formAction] = useFormState(addServer, initialState);

  useEffect(() => {}, []);
};
