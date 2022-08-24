/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/naming-convention */
import { ActionIcon, AppShell, Box, CloseButton, Drawer, MediaQuery } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons";
import { LayoutErrorBoundary } from "layout/LayoutErrorBoundary";
import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect } from "react";

const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});

const SideNav = dynamic(async () => {
  const { SideNav } = await import("./SideNav");
  return SideNav;
});

export const DashboardLayout: CustomLayout = (page) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      styles={(theme) => {
        return {
          body: { minHeight: "100vh" },
          main: { padding: 0, backgroundColor: theme.colors.gray[0] },
        };
      }}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <SideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      <Header
        left={
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <ActionIcon variant="outline" radius="xl" size={40} onClick={handlers.open}>
              <IconMenu2 />
            </ActionIcon>
          </MediaQuery>
        }
      />
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  );
};

const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({ handleClose, opened }) => {
  const router = useRouter();

  // SideNav のメニュークリックで Drawer を閉じる処理
  useEffect(() => {
    router.events.on("routeChangeStart", handleClose);
    return () => {
      router.events.off("routeChangeStart", handleClose);
    };
  }, [handleClose, router.events]);

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      sx={{ position: "relative" }}
    >
      <CloseButton
        size="xl"
        radius="xl"
        variant="transparent"
        onClick={handleClose}
        sx={{
          position: "absolute",
          zIndex: 999,
          top: 8,
          right: -56,
          color: "white",
          "&:not(:disabled):active": { transform: "none" },
        }}
      />
      <SideNav />
    </Drawer>
  );
};
