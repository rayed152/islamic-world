import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-[#CBE4DE] w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-[#2C3333] p2 px-4 rounded-lg text-white"
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>{children}</div>
    </div>
  );
}

export default Layout;
