import { DashboardLayout } from "layout/DashboardLayout";
import type { CustomNextPage } from "next";
import Index from "pages/index";

const IndexPage: CustomNextPage = () => {
  return <Index />;
};

IndexPage.getLayout = DashboardLayout;

export default IndexPage;
