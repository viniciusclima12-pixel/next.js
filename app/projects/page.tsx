import Image from "next/image";
import Card from "@/components/Card"

export default function projects() {
    return(
        <main className="h-screen w-screen bg-gray-300 flex flex-col align-middle items-center">
            <div className="w-screen  flex justify-center items-center h-100 box-border  border-b-2 border-black box-content mb-10  bg-gradient-to-r from-blue-100 to-white">
                <h1 className="text-5xl text-blue-950">Meus Projetos</h1>
            </div>
            
            <div className="flex gap-10 flex-wrap ">
                <Card src="/c.png" 
                title="Lista C" 
                description="Projeto feito com C"
                
                url="https://github.com/viniciusclima12-pixel/Listac" />
                <Card src="/java.png" 
                title="Lista Js" 
                description="Projeto feito com Java"
                url="https://github.com/viniciusclima12-pixel/listaJS" />  
                <Card 
                src="/next.svg"
                title="portfólio"
                description="Projeto feito com Next.js"
                url="https://github.com/viniciusclima12-pixel/next.js-forja.tarde"
                />
            </div>
        </main>

    )
}