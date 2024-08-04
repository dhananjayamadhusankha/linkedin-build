import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-2">
      <section className="hidden md:inline md:col-span-2">
       <UserInformation />
      </section>

      <section className="col-span-8 md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <PostForm />
        {/* post feed */}
      </section>

      <section className="hidden xl:col-span-2 xl:inline">
        {/* widget */}
        <div className="bg-green-600">hi</div>

      </section>
      
    </div>
  );
}
