import { useRouter } from "next/router";

type Props = {
  name: string;
  isClose?: boolean;
};

export const MyPageHeader = (props: Props) => {
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
      <header className="relative m-auto flex h-20 items-center">
        <button className="absolute left-14 sm:left-40" onClick={handleBack}>
          {/* {isClose ? <CgClose size={24} /> : <MdOutlineArrowBackIosNew size={24} />} */}
        </button>
        <div className="m-auto text-center text-xl font-bold">{name}</div>
      </header>
    </>
  );
};
