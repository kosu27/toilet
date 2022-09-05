import { Box, Group, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { FC, ReactNode } from "react";

export const Footer: FC<{ left: ReactNode }> = ({ left }) => {
  const links = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "利用規格",
      link: "/terms",
    },
    {
      label: "プライバシーポリシー",
      link: "/policy",
    },
  ];
  const items = links.map((link) => {
    return (
      <NextLink key={link.label} href={link.link}>
        <Text size="sm" weight={700} style={{ borderRadius: "2px", cursor: "pointer" }}>
          {link.label}
        </Text>
      </NextLink>
    );
  });
  return (
    <Box
      component="footer"
      sx={(theme) => {
        return {
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
          backgroundColor: theme.white,
        };
      }}
    >
      <Group position="apart">
        <Text>© 2022 Kosu Portfolio </Text>
        <Group position="right" spacing="lg" noWrap>
          {left}
          {items}
        </Group>
      </Group>
    </Box>
  );
};
