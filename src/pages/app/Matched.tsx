import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../../utils/api";

const login: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="">
      <div className=""></div>
      <div className=""></div>
      <div className="card h-200 w-96 bg-base-100 shadow-xl">
  <figure><img src="http://clipart-library.com/data_images/255904.png" alt= "Party" /></figure>
  <div className="card-body">
    <div className = "You have Matched!"></div>
    <div className="card-actions justify-end">
    <Link href="/app/Contact">
      <button className="btn btn-sm btn-active btn-ghost">Contact</button>
    </Link>
    </div>
  </div>
</div>
      

      </main>
    </>
  );
};

export default login;


