import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { AuthLayout } from "layout";
import { getPath } from "lib/const";
import type { CustomNextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const SignIn: CustomNextPage = () => {
  const router = useRouter();
  const signIn = () => {
    router.push(getPath("INDEX"));
  };

  return (
    <Container size={500} my={40}>
      <Title
        align="center"
        sx={(theme) => {
          return {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          };
        }}
      >
        ログイン
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={4}>
        アカウントをお持ちではないですか？{" "}
        <Link href={getPath("SIGN_UP")} passHref>
          <Anchor<"a"> size="sm">新規登録</Anchor>
        </Link>
      </Text>

      <Paper shadow="md" radius="md" p={30} mt={30} withBorder>
        <TextInput label="メールアドレス" placeholder="test@example.com" withAsterisk />
        <PasswordInput label="パスワード" placeholder="Your Password" withAsterisk mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="ログイン状態を保持" />
          <Link href={getPath("FORGOT_PASSWORD")} passHref>
            <Anchor<"a"> size="sm">パスワードをお忘れですか？</Anchor>
          </Link>
        </Group>
        <Button fullWidth mt="xl" onClick={signIn}>
          ログイン
        </Button>
      </Paper>
    </Container>
  );
};

SignIn.getLayout = AuthLayout;

export default SignIn;
