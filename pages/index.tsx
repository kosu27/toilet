import { DashboardLayout } from "layout/DashboardLayout";
import type { CustomNextPage } from "next";
import Link from "next/link";
import Index from "pages/index";

const IndexPage: CustomNextPage = () => {
  <Link href="/map">
    <a>MAP</a>
  </Link>;

  return <Index />;
};

IndexPage.getLayout = DashboardLayout;

export default IndexPage;
