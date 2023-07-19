import { url } from "inspector"
import Image from "next/image"

async function getChampions(championsName){
  const request = await fetch(`http://localhost:3000/api/champions?${championsName}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache : "reload"
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
    <div className={`bg-cover object-cover  h-screen w-screen  absolute`}  style={backgroundImageStyle}  >
       
        {/* <Image src={championFiltrado.img} alt={championFiltrado.name} height={2000} width={1000}  className="w-full h-2/3 object-cover aspect-square bg-center"/> */}
        <h2 className="z-auto relative">{championFiltrado.name}</h2>
        <p>{championFiltrado.title}</p>
        <p>{championFiltrado.type}</p>
        <h1>skinks</h1>
        <h2>{championFiltrado.skinks.skin1.name}</h2>
        <Image src={championFiltrado.skinks.skin1.imgSkin} alt={championFiltrado.name} height={100} width={100}/>


    </div>
 
   
    


  )
}