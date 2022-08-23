import dynamic from "next/dynamic";

export const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});
