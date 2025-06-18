import { NavView } from "@/modules/nav/components/Nav-view";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <div>
      <NavView />
      {children}
    </div>
  );
}

export default layout;
