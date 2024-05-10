import { ReactNode } from "react";
import { NavigationMenuItem } from "@/components/ui-library/navigation-menu";

type NavigationListItemProps = {
  children: ReactNode;
};

export const NavigationListItem = ({ children }: NavigationListItemProps) => {
  return <NavigationMenuItem>{children}</NavigationMenuItem>;
};
