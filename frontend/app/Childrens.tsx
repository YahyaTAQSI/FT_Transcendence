"use client";

import { RecoilRoot } from "recoil";
import SubChildrens from "./SubChildrens";
import { useState } from "react";

export default function Childrens({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <SubChildrens>{children}</SubChildrens>
    </RecoilRoot>
  );
}
