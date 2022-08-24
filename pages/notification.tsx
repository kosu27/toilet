import { DashboardLayout } from "layout/DashboardLayout";
import type { CustomNextPage } from "next";
import Notification from "pages/notification";

const NotificationPage: CustomNextPage = () => {
  return <Notification />;
};

NotificationPage.getLayout = DashboardLayout;

export default NotificationPage;
