import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { getPath } from "lib/const";
import Link from "next/link";
import type { FC } from "react";

const useStyles = createStyles((theme) => {
  return {
    title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    controls: {
      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column-reverse",
      },
    },
    control: {
      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        textAlign: "center",
      },
    },
  };
});

const ForgotPassword: FC = () => {
  const { classes } = useStyles();
  const handleClick = () => {
    alert("Click");
  };

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        パスワードリセット
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={4}>
        リセットするためにメールアドレスを入力してください
      </Text>

      <Paper shadow="md" p={30} radius="md" mt="xl" withBorder>
        <TextInput label="メールアドレス" placeholder="test@example.com" withAsterisk />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Link href={getPath("SIGN_IN")} passHref>
            <Anchor<"a"> color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={4}>ログインページに戻る</Box>
              </Center>
            </Anchor>
          </Link>
          <Button className={classes.control} onClick={handleClick}>
            リセットする
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
