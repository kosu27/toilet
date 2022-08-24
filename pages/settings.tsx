import { DashboardLayout } from "layout/DashboardLayout";
import type { CustomNextPage } from "next";
import Settings from "pages/settings";

const SettingsPage: CustomNextPage = () => {
  return <Settings />;
};

SettingsPage.getLayout = DashboardLayout;

export default SettingsPage;
