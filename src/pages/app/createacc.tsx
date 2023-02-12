import { api } from "../../utils/api";
import { type NextPage } from "next";

const createacc: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
    return (
      <>
       <div>
        <div class="form-control bg-white-100">
        <div className="text-center lg:text-left">
        <p className="py-6"></p>
        <h1 className="text-5xl font-bold">Create Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-#68ACE5-100">
      <div className="card-body">
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        </div>
        </div>
      </div>
    </div>
        </div>
       </div>
  
      </>
    );
  };
  
  export default createacc;