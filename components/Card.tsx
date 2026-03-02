import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

export default function Card({ src, title, description ,url}: Props) {
  return (

    <Link href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col h-90 w-60 rounded-lg
     bg-gray-100 border border-black">
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <Image src={src} alt="imagem do projeto" fill />
      </div>
      <div className="flex-1 border-t border-black mt-1">
        <h2 className="text-black text-center text-3xl">{title}</h2>
        <p className="text-black text-center">{description}</p>
        <div className="flex justify-center mt-2">
            
         </div>
    
      </div>
    </div>
    
  
    </Link>
  )
        
      
 
}
