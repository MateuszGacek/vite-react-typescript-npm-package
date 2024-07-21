import { HeaderProps } from "../../types";

export const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className="font-black text-9xl text-red-900 size-24 bg-lime-500">
      {title}
    </h1>
  );
};
