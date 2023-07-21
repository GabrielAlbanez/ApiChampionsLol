"use client"

import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

export default function CarrouselSkin({ Champion }) {

  const [showSkin,setShowSkin] = useState(false)
  const [imgPega,setImgpega] = useState(null)

  const closeModal = () => {
    setShowSkin(false);
    setImgpega(null);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${imgPega})`,
  };





  return (
    <div className="bg-gradient-to-t from-zinc-950 to-white">
    <h1 className="text-center text-4xl text-black pt-4">Skinks</h1>
      {Champion.name !== "Rell" ? (
        <div className="h-screen w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 mx-40">
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin1.name}
              width={400}
              height={400}
              src={Champion.skinks.skin1.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin1.imgSkin)

              }}
           
            />

            <h1 className="text-center text-2xl p-3 ">
              {Champion.name} {Champion.skinks.skin1.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin2.name}
              width={400}
              height={400}
              src={Champion.skinks.skin2.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin2.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin2.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin3.name}
              width={400}
              height={400}
              src={Champion.skinks.skin3.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin3.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin3.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin4.name}
              width={400}
              height={400}
              src={Champion.skinks.skin4.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin4.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin4.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin5.name}
              width={400}
              height={400}
              src={Champion.skinks.skin5.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin5.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin5.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin6.name}
              width={400}
              height={400}
              src={Champion.skinks.skin6.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin6.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin6.name}
            </h1>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 mx-40">
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin1.name}
              width={400}
              height={400}
              src={Champion.skinks.skin1.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin1.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin1.name}
            </h1>
          </div>
          <div className=" w-72 h-72 shadow-2xl aspect-square rounded-md mt-24 ">
            <Image
              alt={Champion.skinks.skin2.name}
              width={400}
              height={400}
              src={Champion.skinks.skin2.imgSkin}
              className="w-full object-cover aspect-square rounded-md"
              onClick={()=>{
                setShowSkin(true)
                setImgpega(Champion.skinks.skin2.imgSkin)

              }}
            />

            <h1 className="text-center text-2xl p-8">
              {Champion.name} {Champion.skinks.skin2.name}
            </h1>
          </div>
        </div>
      )}
      {showSkin && (
         <>
         {/* Your existing code */}
   
         {/* Add the modal */}
         <Modal
           isOpen={showSkin}
           onRequestClose={closeModal}
           contentLabel="Skin Modal"
           style={{
             overlay: {
               backgroundColor: "rgba(0, 0, 0, 0.7)", // Background color of the modal overlay
               zIndex: 9999, // Adjust this value based on your requirements
             },
             content: {
               top: "50%",
               left: "50%",
               right: "auto",
               bottom: "auto",
               transform: "translate(-50%, -50%)",
               border: "none", // Remove default border
               background: "transparent", // Make the modal background transparent
             },
           }}
         >
           {/* Display the image inside the modal */}
           <div className=" bg-cover   object-cover w-[1200px] h-[700px] aspect-square rounded-md flex items-end justify-center shadow-xl" style={backgroundImageStyle}>
          
           </div>
   
           {/* Add any additional content you want to display in the modal */}
   
           {/* Close button */}
          
         </Modal>
       </>
      )}
    </div>
  );
}


