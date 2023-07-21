import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {

  const request = await fetch("http://localhost:3000/api/champions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache : 'no-store'
  })
  const Champions : [] = await request.json()

  
  


  return (
    <main className='container mx-auto  '>
      <h1 className='text-center text-4xl  m-10'>
        Champions
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 m-10'>
        {Champions.map(({id,name,title,type,img}) => (
           <Link href={`/champions/${name}`} key={id}>
          <div className='shadow-2xl aspect-square rounded-md bg-center'>       
          {/* <h1>{img}</h1>  */}
      
              
             
               <Image
               alt={title}
               width={400}
               height={400}
               src={img}
               className='w-full object-cover aspect-square rounded-md'
               />
               
               <h1 className='text-center text-2xl p-8'>{name}</h1>
          
          
           

          </div>
          </Link>
        ))}
        
        
      </div>


    </main>
  )
}
