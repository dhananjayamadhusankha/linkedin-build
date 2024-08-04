import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function UserInformation() {
  const user = await currentUser();
  const { firstName, lastName, imageUrl } = user || {};

  return (
    <div className="flex flex-col mr-6 items-center mx-auto justify-center rounded-lg bg-white py-4 border px-2">
      <Avatar>
        {user?.id && <AvatarImage src={imageUrl} />}
        <AvatarFallback>
          {firstName?.charAt(0)}
          {lastName ? lastName.charAt(0) : null}
        </AvatarFallback>
      </Avatar>

      <SignedIn>
        <div className="text-center">
          <p className="font-semibold">
            {firstName} {lastName}
          </p>
          <p className="text-xs">
            @{firstName}
            {lastName}-{user?.id.slice(-4)}
          </p>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="text-center space-y-2">
          <p className="font-semibold">You are not signed in</p>
          <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign In</SignInButton>
          </Button>
        </div>
      </SignedOut>

      <SignedIn>
        <hr className="border-gray-200 my-5 w-full" />

        {/* <div className="flex flex-row justify-between items-center w-full px-4">
          <p className="font-semibold text-gray-400">Posts</p>
          <p className="text-blue-400">{userPosts.length}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-4">
          <p className="font-semibold text-gray-400">Comments</p>
          <p className="text-blue-400">{userComments.length}</p>
        </div> */}
      </SignedIn>
    </div>
  );
}

export default UserInformation;
