import { DashboardLayout } from "layout/DashboardLayout";
import type { CustomNextPage } from "next";
import { About } from "pages/about";

const AboutPage: CustomNextPage = () => {
  return <About />;
};

AboutPage.getLayout = DashboardLayout;

export default AboutPage;
