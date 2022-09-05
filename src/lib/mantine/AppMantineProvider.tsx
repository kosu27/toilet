import type { ColorScheme } from "@mantine/core";
import { ColorSchemeProvider } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import type { FC, ReactNode } from "react";

export const AppMantineProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    return setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  // Cmd + Jでライトモード/ダークモードを切り替え
  useHotkeys([
    [
      "mod+J",
      () => {
        return toggleColorScheme();
      },
    ],
  ]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
