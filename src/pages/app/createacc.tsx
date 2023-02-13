import { api } from "../../utils/api";
import { type NextPage } from "next";
import Link from "next/link";

const createacc: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
    return (
      <>
       <div>
        <div className="form-control bg-white-500">
        <div className="text-center lg:text-left">
        <p className="py-6"></p>
        <h1 className="text-5xl font-bold">Create Account</h1>
        <p className="py-4"></p>
        </div>
        <div className="ml-5">
        <label className="label mt-1">
        <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label mt-5">
        <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label mt-5">
        <span className="label-text">Phone Number</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label mt-5">
        <span className="label-text">Class</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label mt-5">
        <span className="label-text">Major</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label mt-5">
        <span className="label-text">Gender</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>  

        </div>

        <div className="bg-100 pl-10 pr-20">
        <Link href = "preferences" className="form-control mt-6 flex flex-col">
        <button className="btn btn-outline btn-sm">Create Account</button>
       </Link>
       </div>
      </div>

  
      </>
    );
  };
  
  export default createacc;