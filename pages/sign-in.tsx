import { AuthLayout } from "layout";
import type { CustomNextPage } from "next";
import SignIn from "pages/sign-in";

const SignInPage: CustomNextPage = () => {
  return <SignIn />;
};

SignInPage.getLayout = AuthLayout;

export default SignInPage;
