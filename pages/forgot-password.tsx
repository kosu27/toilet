import { AuthLayout } from "layout";
import type { CustomNextPage } from "next";
import ForgotPassword from "pages/forgot-password";

const ForgotPasswordPage: CustomNextPage = () => {
  return <ForgotPassword />;
};

ForgotPasswordPage.getLayout = AuthLayout;

export default ForgotPasswordPage;
