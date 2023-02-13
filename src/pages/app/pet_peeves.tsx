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
      <textarea className="textarea textarea_bordered w-96 h-32" placeholder="My fourth pet peeve"></textarea>
      <div></div>
      <textarea className="textarea textarea_bordered w-96 h-32" placeholder="My fifth pet peeve"></textarea>
      <div></div>
      
      <Link href = "hobbies" className="form-control mt-6">
        <div className='fixed bottom-0'>
            <button className="bottom-0 btn btn-md">Back</button>
        </div>
      </Link>
      <Link href = "home" className="form-control mt-6">
        <div className='fixed bottom-0 right-0'>
            <button className="bottom-0 right-0 btn btn-md">Submit</button>
        </div>
      </Link>
      </main>
    </>
  );
};

export default login;
