import Image from "next/image";
import fundoComp from "../public/assets/Fundo-Link.png";
import fundoCard1 from "./assets/Image-Atendimento.png";
import fundoCard2 from "./assets/Image-Portifolio.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 justify-between gap-14   text-white max-sm:p-4`}
      style={{
        backgroundImage: `url(${fundoComp.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Image
          width={400}
          height={400}
          src="/logo.svg"
          alt="logo-ryro"
        />
      </div>

      <section className="w-full grid grid-cols-2 gap-8 min-h-[400px]  max-lg:grid-cols-1  ">
        <Link href={"/orcamento"} className={`w-full h-[295px] rounded-md animate-slideInLeft`}>
          <div
            className={`w-full h-full rounded-md flex flex-col justify-end`}
            style={{
              backgroundImage: `url(${fundoCard1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-[40%] bg-black bg-opacity-35 p-4 flex flex-col gap-2">
              <h2 className="font-bold">Realizar Orçamento</h2>
              <p>Solicite um orçamento para ter meus serviços.</p>
            </div>
          </div>
        </Link>

        <Link href={""} className={`w-full h-[295px] cursor-not-allowed animate-slideInRight`}>
          <div
            className={`w-full h-full rounded-md`}
            style={{
              backgroundImage: `url(${fundoCard2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </Link>
      </section>

      <section className="max-w-[400px]  flex justify-center items-end">
        <h2>Criado por <a href="https://www.instagram.com/varela.dev/" className="underline">@Ryan Varela</a></h2>
      </section>
    </main>
  );
}
