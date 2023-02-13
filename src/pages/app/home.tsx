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
    <p> University: JHU</p>
    <p> Grade: Freshman</p>

    <p> Preferences: </p>
    <p> *Quiet Time at 11 PM </p>
    <p> *Ok with friends over if notified </p>
    <p> *McCoy Suite </p>
    <div className="card-actions justify-end">
    <Link href="">
      <button className="btn btn-sm btn-active btn-ghost">Next</button>
    </Link>
    <Link href="Matched">
      <button className="btn btn-sm btn-active btn-ghost">Match!</button>
    </Link>
    </div>
  </div>

</div>
<button className="btn btn-circle fixed bottom-1">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>

      </main>
    </>
  );
};

export default login;


