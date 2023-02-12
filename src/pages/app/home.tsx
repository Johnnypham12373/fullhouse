import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../../utils/api";

const login: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="avatar">
  <div className="w-32 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="avatar">
  <div className="w-20 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div className="avatar">
  <div className="w-8 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
      </main>
    </>
  );
};

export default login;

