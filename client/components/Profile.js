import React from "react";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  return (
    <div className="w-screen h-[800px] flex items-center">
      <div className="flex flex-col items-center w-full">
        <img src={session.user.image} className="w-32 h-32 rounded-full mb-4" />
        <h1>Welcome,</h1>
        <div className="text-2xl font-medium mb-2">{session.user.name}</div>
        <div className="text-gray-500">{session.user.email} </div>
      </div>
    </div>
  );
}

export default Profile;
