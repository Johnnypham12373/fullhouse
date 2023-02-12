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
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Eric</h2>
    <p> University: JHU</p>
    <div className=""></div>
    <p> Grade: Freshman</p>
    <div className=""></div>
    <div className="card-actions justify-end">
    {/* The button to open modal */}
    <label htmlFor="my-modal-5" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box h-7/8 w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">About me!</h3>
    <p className="py-4">!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn"></label>
    </div>
  </div>
</div>
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

