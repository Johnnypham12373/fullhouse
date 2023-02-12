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
      
      <textarea className="textarea textarea_bordered w-96 h-32" placeholder="My first pet peeve"></textarea>
      <div></div>
      <textarea className="textarea textarea_bordered w-96 h-32" placeholder="My second pet peeve"></textarea>
      <div></div>
      <textarea className="textarea textarea_bordered w-96 h-32" placeholder="My third pet peeve"></textarea>
      <div></div>
      <textarea placeholder="Anything about me!" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
      <div></div>
      
      <button className="btn btn-primary">Home</button>
      </main>
    </>
  );
};

export default login;
