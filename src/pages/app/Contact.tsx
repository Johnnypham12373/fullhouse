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
  <figure><img src="https://images.squarespace-cdn.com/content/v1/58c846642994ca3a008a6034/1559576853555-MFC8ONFCO2TNY5W6XISB/nile-scott-shots-boston-headshot-photography-portrait-12-of-12_1_orig.jpg?format=500w" alt= "Eric" /></figure>
  <div className="card-body">
    <h2 className="card-title">Eric Chiddleton</h2>
    <p> Phone Number: 555-194-2910</p>
    <p> Instagram: Echiddle143</p>
    <p> Snap: Eric_swag_143</p>
    <div className="card-actions justify-end">
    <Link href="/app/home">
      <button className="btn btn-sm btn-active btn-ghost">Home</button>
    </Link>
    
    </div>
  </div>
</div>
      

      </main>
    </>
  );
};

export default login;

