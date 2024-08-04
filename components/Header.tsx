import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  MessagesSquare,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/b3z"
          alt="logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
      </Link>

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md mx-2 max-w-96">
          <SearchIcon className="h-4 w-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-1 bg-transparent"
          />
        </form>
      </div>

      <div className="flex space-x-4 pl-4">
        <Link href="/" className="icon items-center">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <UserIcon className="h-5" />
          <p>Network</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>
        <Link href="/" className="icon">
          <MessagesSquare className="h-5" />
          <p>Message</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button className="text-sm" asChild variant={"secondary"}>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
