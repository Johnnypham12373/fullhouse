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
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Eric</h2>
    <p> University: JHU</p>
    <p> Grade: Freshman</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Match!</button>
      <a href = "index"> Next </a>
    </div>
  </div>
</div>
      <div className="avatar">
  <div className="w-32 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>

      </main>
    </>
  );
};

export default login;

