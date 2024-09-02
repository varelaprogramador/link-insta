import Image from "next/image";
import fundoComp from "../../public/assets/Fundo-Link.png";
import fundoCard1 from "./assets/Image-Criar.png";
import fundoCard2 from "./assets/Image-Refinar.png";

import Link from "next/link";

export default function Orcamento() {
  return (
    <main
    className={`flex min-h-screen flex-col items-center p-24 justify-between gap-14 lg:max-h-screen x-overflow-hidden text-white max-sm:p-4`}
    style={{
      backgroundImage: `url(${fundoComp.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

      <div className="w-full flex justify-between items-start">
        <Link href={"/"}>
          <button className="p-2 bg-white text-black rounded-md font-semibold ">
            &larr; Voltar</button>
        </Link>

        <Image width={400} height={400} src="/logo.svg" alt="logo-ryro" />
        <div></div>
      </div>
      <section  className="w-full grid grid-cols-2 gap-8 min-h-[400px]  max-lg:grid-cols-1  ">
        <Link href={"https://w.app/4Ti1rq"} className={`w-full h-[295px] rounded-md animate-slideInLeft`}>
          <div
            className={`w-full h-full rounded-md flex flex-col justify-end`}
            style={{
              backgroundImage: `url(${fundoCard1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-[40%] bg-black bg-opacity-35 p-4 flex flex-col gap-2">
              <h2 className="font-semibold">Criar um site do zero</h2>
              <p>Solicite um orçamento para ter seu próprio site criado do zero por Ryan Varela.</p>
            </div>
          </div>
        </Link>

        <Link href={"https://w.app/pqo7Yw"} className={`w-full h-[295px] rounded-md animate-slideInRight`}>
          <div
            className={`w-full h-full rounded-md flex flex-col justify-end`}
            style={{
              backgroundImage: `url(${fundoCard2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-[40%] bg-black bg-opacity-35 p-4 flex flex-col gap-2">
              <h2 className="font-semibold">Refinar  meu  site </h2>
              <p>Solicite um orçamento para ter seu  site remodelado por Ryan Varela.</p>
            </div>
          </div>
        </Link>

      </section>


      <section className="min-w-80 max-w-[400px] min-h-36 flex justify-center items-end">
        <h2>Criado por <a href="https://www.instagram.com/varela.dev/" className="underline">@Ryan Varela</a></h2>
      </section>
    </main>
  );
}
