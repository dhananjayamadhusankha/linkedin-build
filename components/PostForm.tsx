"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Image, XIcon } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";

function PostForm() {
  const { user } = useUser();
  const { firstName, lastName, imageUrl, id } = user || {};

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const haddleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <form className="flex flex-col p-3 border bg-white rounded-lg space-y-3">
      <div className="flex space-x-3 items-center">
        <Avatar>
          {id && <AvatarImage src={imageUrl} />}
          <AvatarFallback>
            {firstName?.charAt(0)}
            {lastName ? lastName.charAt(0) : null}
          </AvatarFallback>
        </Avatar>

        <input
          type="text"
          placeholder="Start writing a post..."
          className="outline-none flex-1 bg-white px-5 py-3 rounded-full text-sm border"
        />
      </div>

      <input
        type="file"
        name="image"
        accept="image/*"
        ref={fileInputRef}
        onChange={haddleImageChange}
        hidden
      />

      {image && (
        <div>
          <img
            src={image}
            alt="Preview"
            className="w-full object-cover rounded-md"
          />
        </div>
      )}

      <div className="flex space-x-2 justify-end">
        <Button
          asChild
          onClick={() => fileInputRef.current?.click()}
          type="button"
          variant={image ? "secondary" : "outline"}
          className="hover:cursor-pointer"
        >
          <span>
            <Image className="mr-2" size={16} />
            {image ? "Change image" : "Add image"}
          </span>
        </Button>

        {image && (
          <Button
            asChild
            variant={"destructive"}
            type="button"
            onClick={() => setImage(null)}
            className="hover:cursor-pointer"
          >
            <span>
              <XIcon className="mr-2" size={16} />
              Remove Image
            </span>
          </Button>
        )}
      </div>
    </form>
  );
}

export default PostForm;
