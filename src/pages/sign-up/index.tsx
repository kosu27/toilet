import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { getPath } from "lib/const";
import type { CustomNextPage } from "next";
import Link from "next/link";

const SignUp: CustomNextPage = () => {
  const signUp = () => {
    alert("メールを送信しました");
  };

  return (
    <Container size={500} mt={40}>
      <Title
        align="center"
        sx={(theme) => {
          return {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          };
        }}
      >
        新規登録
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={4}>
        アカウントを既にお持ちですか？{" "}
        <Link href={getPath("SIGN_IN")} passHref>
          <Anchor<"a"> size="sm">ログイン</Anchor>
        </Link>
      </Text>

      <Paper shadow="md" radius="md" p={30} mt={30} withBorder>
        <TextInput label="メールアドレス" placeholder="test@example.com" withAsterisk />
        <PasswordInput label="パスワード" placeholder="Your Password" withAsterisk mt="md" />
        <Space h="md" />
        <Button fullWidth mt="xl" onClick={signUp}>
          新規登録
        </Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
