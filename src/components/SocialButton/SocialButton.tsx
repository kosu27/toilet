import type { ButtonProps } from "@mantine/core";
import { Button, Group } from "@mantine/core";
import { TwitterIcon } from "@mantine/ds";
import { GoogleIcon } from "components/SocialButton/GoogleIcon";

export const GoogleButton = (props: ButtonProps) => {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
};

export const TwitterButton = (props: ButtonProps & React.ComponentPropsWithoutRef<"a">) => {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size={16} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
};

export const SocialButton = () => {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton>
    </Group>
  );
};
