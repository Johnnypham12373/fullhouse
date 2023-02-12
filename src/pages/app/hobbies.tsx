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
      
      <textarea className="textarea textarea_bordered w-96 h-40" placeholder="Interests"></textarea>
      <div></div>
      <textarea className="textarea textarea_bordered w-96 h-40" placeholder="Hobbies"></textarea>
      <div></div>
      <textarea className="textarea textarea_bordered w-96 h-40" placeholder="Background"></textarea>
      <div></div>
      <textarea placeholder="Anything about me!" className="textarea textarea-bordered w-96 h-60" ></textarea>
      <div></div>
      
      <Link href = "preferences" className="form-control mt-6">
        <div className='fixed bottom-0 w-full'>
            <button className="bottom-0 btn btn-md">Back</button>
        </div>
      </Link>
      <Link href = "preferences" className="form-control mt-6">
        <div className='fixed bottom-0 w-full'>
            <button className="bottom-0 right-full btn btn-md">Next</button>
        </div>
      </Link>
    
      

      </main>
    </>
  );
};

export default login;
