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
      
      <textarea className="textarea w-96 h-32" placeholder="Interests"></textarea>
      <div></div>
      <textarea className="textarea w-96 h-32" placeholder="Hobbies"></textarea>
      <div></div>
      <textarea className="textarea w-96 h-32" placeholder="Background"></textarea>
      <select className="select w-full max-w-xs">
    <option disabled selected>Prefered # of Roommates</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    </select>

      </main>
    </>
  );
};

export default login;
