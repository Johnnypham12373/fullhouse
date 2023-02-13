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
    
      <div></div>
      <div className = "text=5xl"> </div>
      <div className="Housing">
    <label tabIndex={0} className="btn m-1">Housing Preference</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>AMR 1 (Communal)</a></li>
    <li><a>AMR 2 (Communal)</a></li>
    <li><a>AMR 3A/3B (Suite)</a></li>
    <li><a>Wolman Hall (Suite)</a></li>
    <li><a>McCoy Hall (Suite)</a></li>
    
    </ul>
    </div>
      <textarea className="textarea w-96 h-32" placeholder="Sleep Schedule"></textarea>
      <div></div>
      <textarea className="textarea w-96 h-32" placeholder="Cleanliness"></textarea>
      <select className="select w-full max-w-xs">
    <option disabled selected>Prefered # of Roommates</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    </select>
    <div></div>
    <Link href = "home" className="form-control mt-6">
        <div className='fixed bottom-0'>
            <button className="bottom-0 btn btn-md">Back</button>
        </div>
      </Link>
      <Link href = "hobbies" className="form-control mt-6 ">
        <div className='fixed bottom-0 right-0'>
            <button className="bottom-0 right-0 btn btn-md">Next</button>
        </div>
      </Link>
      </main>
    </>
  );
};

export default login;

