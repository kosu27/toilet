import { Global } from "@emotion/react";
import type { FC, ReactNode } from "react";

export const GlobalStyleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={{
          "*": { wordBreak: "break-all" },
          'button, *[type="button]': { transform: "none !important" },
        }}
      />
      {children}
    </>
  );
};
