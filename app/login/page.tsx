import Button from "@/components/Button"
import LoginForm from "@/components/LoginForm"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io"

export default function Login() {
    return (
        <section className="bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-400 h-screen place-content-center place-items-center">
            <div className="max-w-[900px] h-[500px] bg-slate-100 mx-auto rounded-3xl flex shadow-2xl">
                <div
                    className="bg-blue-500 h-full w-1/2 rounded-l-3xl rounded-r-[125px] text-white place-content-center place-items-center space-y-2.5"
                >
                    <h1 className="font-extrabold text-4xl">Hello, Welcome!</h1>
                    <h3 className="text-lg">{`Don't have an account?`}</h3>
                    <Button title="Register" href="signup"/>
                </div>
                <div className="h-full w-1/2 place-content-center place-items-center space-y-2">
                    <h2 className="font-black text-3xl text-slate-600">Login</h2>
                    <LoginForm/>
                    <p className="text-lg text-slate-600">or login with social platform</p>
                    <span className="max-w-80 w-full flex justify-center gap-x-3.5 text-slate-600 text-xl">
                        <div className="border border-slate-300 rounded p-1.5 cursor-pointer">
                            <IoLogoGoogle/>
                        </div>
                        <div className="border border-slate-300 rounded p-1.5 cursor-pointer">
                            <FaFacebookF/>
                        </div>
                        <div className="border border-slate-300 rounded p-1.5 cursor-pointer">
                            <IoLogoGithub/>
                        </div>
                        <div className="border border-slate-300 rounded p-1.5 cursor-pointer">
                            <FaLinkedinIn/>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    )
}