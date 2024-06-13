import Link from "next/link";
import AuthButton from "./AuthButton";
import ThemeSwitchToggle from "./ThemeSwitch";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="sticky top-0 w-full flex justify-between border-b border-b-foreground/10 h-16 shadow-sm bg-white dark:bg-slate-800 z-20">
      <div className="w-full flex justify-between items-center p-3">
        <Link className="text-2xl flex flex-row gap-1 items-center" href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={100}
            height={100}
            className="w-16 h-16"
          />
          <p className="font-sans font-bold text-2xl hidden sm:flex">
            Revenu Accounts
          </p>
        </Link>
        <div className="flex flex-row gap-4">
          <AuthButton /> <ThemeSwitchToggle />
        </div>
      </div>
    </nav>
  );
}
