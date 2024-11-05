import Sheet from "@/app/_components/Sheet";
import { title } from "process";

export const metadata = {
  title: "WORKS",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Sheet>{children}</Sheet>
    </>
  );
}
