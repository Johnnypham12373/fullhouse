import { api } from "../../utils/api";
import { type NextPage } from "next";

const createacc: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
    return (
      <>
       <div>
        <div class="form-control bg-white-1000">
        <div className="text-center lg:text-left">
        <p className="py-6"></p>
        <h1 className="text-5xl font-bold">Create Account</h1>
        <p className="py-4"></p>
        </div>
        <div class="ml-5">
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
        </div>  
        </div>
      </div>

  
      </>
    );
  };
  
  export default createacc;