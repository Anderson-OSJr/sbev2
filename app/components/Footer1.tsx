import Image from "next/image";

const Footer1 = () => {
  return (
    <section className="mt-8">
      <div className="h-28 mx-auto max-w-5xl bg-blue-950 flex items-center justify-between px-4 sm:px-8 md:px-10 bg-[url(/balao14.jpg)] bg-contain bg-center bg-no-repeat bg-blend-multiply shadow-md shadow-blue-300">
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          <div className="#">
            <Image
              src="/SBEV-2.png"
              alt="Logo da SBEV"
              width={55}
              height={76}
            />
          </div>
          <div>
            <h1 className="text-blue-100 text-[14px] md:text-[18px] max-w-36 md:max-w-72 ">
              Associação Brasileira dos Profissionais de Ensaios em Voo
            </h1>
          </div>
        </div>
        <div>
          <p className="text-blue-100 text-[12px] md:text-[18px]">
            CNPJ: 24.845.945/0001-72
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer1;
