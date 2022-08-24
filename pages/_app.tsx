/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationsProvider } from "@mantine/notifications";
import { AppMantineProvider, GlobalStyleProvider } from "lib/mantine";
import type { CustomAppPage } from "next/app";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <GlobalStyleProvider>
      <AppMantineProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </AppMantineProvider>
    </GlobalStyleProvider>
  );
};

export default App;
