import { AuthLayout } from "layout";
import type { CustomNextPage } from "next";
import SignUp from "pages/sign-up";

const SignUpPage: CustomNextPage = () => {
  return <SignUp />;
};

SignUpPage.getLayout = AuthLayout;

export default SignUpPage;
