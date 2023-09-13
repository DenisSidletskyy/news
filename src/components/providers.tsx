"use client";

import {ReactNode} from "react";
import {StoreProvider} from "easy-peasy";
import store from "@/services/store";

type Props = {
  children: ReactNode;
};

export default function Providers({children}: Props) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
