import { url } from "inspector"
import Image from "next/image"

async function getChampions(championsName){
  const request = await fetch(`http://localhost:3000/api/champions?${championsName}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache : "force-cache"
  })
  const data = await request.json()
  return data
}

export default async function Champions({params}){

 const championFiltrado  = await getChampions(params.name)
 console.log(championFiltrado)

 
 const backgroundImageStyle = {
  backgroundImage: `url(${championFiltrado.img})`,
  backdropFilter: "blur(100%)", // Aqui adicionamos o desfoque com backdrop-filter
};

  return(
    <div className="h-screen w-screen bg-zinc-900">
    <div className={`bg-cover object-cover opacity-20  blur-md h-screen w-screen  absolute`}  style={backgroundImageStyle}  ></div>
       
        {/* <Image src={championFiltrado.img} alt={championFiltrado.name} height={2000} width={1000}  className="w-full h-2/3 object-cover aspect-square bg-center"/> */}
        <div className="z-auto relative flex justify-center items-center h-2/3">
        <div className={`bg-cover object-cover w-2/3 h-4/5 aspect-square rounded-md`}  style={backgroundImageStyle}  ></div>
       
        {/* <h2 className="">{championFiltrado.name}</h2>
        <p>{championFiltrado.title}</p>
        <p>{championFiltrado.type}</p>
        <h1>skinks</h1>
        <h2>{championFiltrado.skinks.skin1.name}</h2> */}
        </div>

    
    </div>
 
   
    


  )
}