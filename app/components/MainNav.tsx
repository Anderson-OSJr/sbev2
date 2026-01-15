"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";
import { useState } from "react";
import { DiVim } from "react-icons/di";

const MainNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <section id="mainNav" className="fixed top-0 left-0 right-0">
      <div className="mx-auto h-40 max-w-5xl bg-blue-950 flex items-center justify-between px-4 sm:px-8 md:px-10 bg-[url(/balao14.jpg)] bg-contain bg-center bg-no-repeat bg-blend-multiply">
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
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <IoMenu size={35} />
        </button>
        <Menu />
      </div>
      {isMenuActive && <div>Teste</div>}
    </section>
  );
};
export default MainNav;
