/* eslint-disable @typescript-eslint/naming-convention */
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";
import type { FC } from "react";

export const ColorSchemeButton: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      onClick={() => {
        toggleColorScheme();
      }}
      title="Toggle color scheme"
      sx={{
        "&:not(:disabled):active": { transform: "none" },
      }}
    >
      {dark ? <IconSun size={24} /> : <IconMoon size={24} />}
    </ActionIcon>
  );
};
