import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { AppProps, CustomAppPage } from "next/app";

const App: CustomAppPage = ({ Component, pageProps }: AppProps) => {
  // const getLayout = Component.getLayout || ((page) => {
  //   return page
  // })

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default App;
