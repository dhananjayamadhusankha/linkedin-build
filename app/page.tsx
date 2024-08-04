import UserInformation from "@/components/UserInformation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid">
      <section>
       <UserInformation />
      </section>

      <section>
        {/* post form */}
        {/* post feed */}
      </section>

      <section>
        {/* widget */}
      </section>
    </div>
  );
}
