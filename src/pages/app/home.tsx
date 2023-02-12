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
      <div className="card h-200 w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/Adam.jpg" /></figure>
  <div className="card-body">
    <h2 className="card-title">Eric</h2>
    <p> University: JHU</p>
    <p> Grade: Freshman</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Match!</button>
    <button className="btn btn-primary">Next</button>
    </div>
  </div>
</div>
      

      </main>
    </>
  );
};

export default login;


