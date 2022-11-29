import { Avatar } from "@mantine/core";
import { useRouter } from "next/router";

type Props = {
  name: string;
  isClose?: boolean;
};

export const Header = (props: Props) => {
  const { isClose, name } = props;
  const router = useRouter();

  const handleBack = () => {
    if (isClose) {
      router.push("/");
    } else {
      router.back();
    }
  };
  return (
    <>
      <header className="w-full bg-[#333333]">
        <div className="flex h-[70px] items-center justify-between px-5">
          <p className="text-[20px] font-bold text-white">Toilet APP</p>
          <button className="absolute left-14 sm:left-40" onClick={handleBack}>
            {/* {isClose ? <CgClose size={24} /> : <MdOutlineArrowBackIosNew size={24} />} */}
          </button>
          <div className="m-auto text-center text-xl font-bold">{name}</div>
          <Avatar radius="xl" />
        </div>
      </header>
    </>
  );
};
