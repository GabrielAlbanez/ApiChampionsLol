
// import { url } from "inspector";
import Image from "next/image";
import CarrouselSkin from "@/app/components/CarrouselSkin"

async function getChampions(championsName) {
  const request = await fetch(
    `http://localhost:3000/api/champions?${championsName}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "default",
    }
  );
  const data = await request.json();
  return data;
}

export default async function Champions({ params }) {
  const championFiltrado = await getChampions(params.name);
  console.log(championFiltrado);

  const backgroundImageStyle = {
    backgroundImage: `url(${championFiltrado.img})`,
    backdropFilter: "blur(100%)", // Aqui adicionamos o desfoque com backdrop-filter
  };

  return (
    <div className="h-screen w-screen bg-zinc-900">
      <div
        className={`bg-cover object-cover opacity-20  blur-md h-screen w-screen   absolute`}
        style={backgroundImageStyle}
      ></div>

      {/* <Image src={championFiltrado.img} alt={championFiltrado.name} height={2000} width={1000}  className="w-full h-2/3 object-cover aspect-square bg-center"/> */}
      <div className="z-auto relative flex justify-center items-center h-screen flex-col py-10">
        <div
          className={`  bg-cover   object-cover w-2/3 h-4/5 aspect-square rounded-md flex items-end justify-center shadow-xl`}
          style={backgroundImageStyle}
        >
          <h2 className="text-white text-4xl ">{championFiltrado.name}</h2>
        </div>
        <div className="bg-zinc-950 w-2/3 h-3/5 opacity-25 text-white flex ">
          <div
            className="w-3/6 flex justify-center flex-col items-center my-24"
            style={{ borderRight: "1px solid white" }}
          >
            <svg
              className="w-10 h-14 "
              style={{ fill: " rgb(208, 168, 92);" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              data-testid="overview:roleicon"
            >
              <path d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"></path>
              <path d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"></path>
            </svg>
            <h1>{championFiltrado.type}</h1>
          </div>

          <div className="flex justify-center items-center w-3/6 my-24 px-24">
            <h1>{championFiltrado.title}</h1>
          </div>
        </div>

        {/* <h2 className="">{championFiltrado.name}</h2>
        <p>{championFiltrado.title}</p>
        <p>{championFiltrado.type}</p>
        <h1>skinks</h1>
        <h2>{championFiltrado.skinks.skin1.name}</h2> */}
        <div></div>
      </div>
      <>
       <CarrouselSkin Champion={championFiltrado}/>
      </>
    </div>
  );
}
