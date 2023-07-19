

import { NextRequest, NextResponse } from "next/server"
import championsData from "../data/champions.json"

export const GET =  async(req : NextRequest , res : NextResponse)=>{
  const name =  req.url.split("champions?")[1];
  console.log(name)

  if (name) {
    const nomeCampeao = name.toLowerCase();
    const campeaoEncontrado = championsData.find(campeao => campeao.name.toLowerCase() === nomeCampeao);

    if (campeaoEncontrado) {
      return NextResponse.json(campeaoEncontrado);
    } else {
      return NextResponse.json({ error: 'Campeão não encontrado' }, { status: 404 });
    }
  }

  return NextResponse.json(championsData);
}
