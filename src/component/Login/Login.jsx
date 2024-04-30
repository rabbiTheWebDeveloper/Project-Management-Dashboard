import { CustomButton } from "../ui/Button";
import { H2 } from "../ui/Tag";
import { CustomInput } from "../ui/input";

const Login = () => {
  return (
    <section className="h-screen w-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-72 tab:w-80">
        {/* logo */}
        <H2 name="Logo" className="text-center" />

        <form action="" className="flex flex-col gap-5">
          {/* item */}
          <div className="">
            <label htmlFor="" className="block mb-1">
              Email
            </label>
            <CustomInput type="text" name="" placeholder="Enter your email" />
          </div>

          {/* item */}
          <div className="">
            <label htmlFor="" className="block mb-1">
              Password
            </label>
            <CustomInput
              type="password"
              name=""
              placeholder="Enter your password"
            />
          </div>

          {/* item */}
          <div className="">
            <CustomButton type="submit" className="w-full">
              Login
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
