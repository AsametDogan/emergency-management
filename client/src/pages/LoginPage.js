import React from "react";

const LoginPage = () => {
  return (
    <section className="h-screen flex md:flex-col flex-row justify-center gap-5 px-5 items-center ">
      <div className="  max-w-sm flex ">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="sm:w-[90%] max-w-sm w-2/5  flex flex-col gap-5">
        <div class="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueLight peer"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blueLight  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Adresi
          </label>
        </div>
        <div class="relative z-0 w-full group">
          <input
            type="password"
            name="password"
            id="password"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueLight peer"
            placeholder=" "
            required
          />
          <label
            for="password"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blueLight  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Şifre
          </label>
        </div>

        <div className="mt-4 flex justify-between font-semibold text-sm">
          <a
            className="text-blueLight hover:text-blueDark hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blueLight hover:bg-blueDark px-4 py-2 transition-all hover:scale-105 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
