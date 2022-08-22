import { Center, Container } from "@mantine/core";
import { LayoutErrorBoundary } from "layout/LayoutErrorBoundary";
import type { CustomLayout } from "next";

export const AuthLayout: CustomLayout = (page) => {
  return (
    <Center
      sx={(theme) => {
        return {
          minHeight: "100vh",
          backGroundColor: theme.colors.gray[1],
        };
      }}
    >
      <Container size="xs" sx={{ width: 500, paddingBottom: 16 }}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Container>
    </Center>
  );
};
