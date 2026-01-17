"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const activateMenu = () => {
    setIsMenuActive((previous) => !previous);
  };

  return (
    <section id="mainNav" className="fixed top-0 left-0 right-0">
      <div className="mx-auto h-40 max-w-5xl bg-blue-950 flex items-center justify-between px-4 sm:px-8 md:px-10 bg-[url(/balao14.jpg)] bg-contain bg-center bg-no-repeat bg-blend-multiply shadow-md shadow-blue-300">
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          <div className="#">
            <Image
              src="/SBEV-2.png"
              alt="Logo da SBEV"
              width={76}
              height={76}
            />
          </div>
          <div>
            <h1 className="text-blue-100 max-w-44 md:max-w-60 ">
              Associação Brasileira dos Profissionais de Ensaios em Voo
            </h1>
          </div>
        </div>
        <button
          className="text-blue-100 hover:cursor-pointer hover:text-blue-50 hover:scale-125 md:hidden"
          onClick={activateMenu}
        >
          <IoMenu size={35} />
        </button>
        <Menu />
      </div>
      <div className="absolute top-50 right-2">
        {/* Mobile Menu */}
        {isMenuActive && (
          <div className="md:hidden">
            <MobileMenu />
          </div>
        )}
      </div>
    </section>
  );
};

export default MainNav;
