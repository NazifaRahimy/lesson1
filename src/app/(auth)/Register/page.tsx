// import { metadata } from "@/app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register", 
    description: "Access your account by logging in with your credentials.",
}

const Register = () => {
    return ( 
         <h1 className="my-20 text-center text-4xl font-semibold">Register</h1>
     );
}
 
export default Register