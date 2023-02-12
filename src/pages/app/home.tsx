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
    <button className="btn btn-primary">Next</button>
    <button className="btn btn-primary">Match!</button>
    </div>
  </div>
</div>
      

      </main>
    </>
  );
};

export default login;


