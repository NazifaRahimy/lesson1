import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Login",
    description: "Access your account by logging in with your credentials.",
};

export default function Login (){
    return (
         <div className="flex min-h-screen  flex-col p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Login Page</h1>
        <div className="container flex flex-col gap-2 shadow-md p-6 mt-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
           
        </div>
    </div>
    )
}