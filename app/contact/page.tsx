"use client"

import { useMemo, useEffect, useState, use, } from "react";


export default function Contact() {
  const [email, setEmail] = useState("");

  const error = useMemo(() => {
    return !email.includes("@");
  }, [email])



  //const  [error , setError] = useState(false);


  /*useEffect(() => {
     if(email.includes("@"))
         setError(false)
     else
         setError(true);
     }, [email])*/


  function getEmail() {
    if (!error) {
      window.open(`https://wa.me/55991999999?text=entre em contato comigo pelo email${email} `,
      );
    }
  }
  return (

    <main className="w-screen h-screen flex flex-col gap-16 justify-center items-center" >
      <h1 className="text-6xl">Contato</h1>
      <div>
        <p>Digite seu email para eu entrar em contato!</p>
        <input type="email"
          placeholder="Digite Seu Email"
          className="border border-black rounded-lg p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    {error && <p className="text-red-500">Email inválido!</p>}
      </div>

      <button className="cursor-pointer border border-white py-2 px-10 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 bg-black text-white"
        onClick={() => {
          getEmail();
         

          
        }}

        disabled={error}

      >Enviar</button>




    </main>
  )



}