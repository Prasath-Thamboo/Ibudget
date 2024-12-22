import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <div className="flex items-center justify-center flex-col py-10 w-full">
        <div>
          <div className="flex flex-col">
            <h1 className="text-4x1 md:text-4xl font-bold text-center">
              Prenez le controle de votre budget merde
            </h1>
            <p className="py-6 text-gray-800 text-center"> suivez vos bidget et dépenses pour éviter kles problèmes qvzc les vanques </p>
            <div className="flex justify-center items-center">
              <Link 
              href={""} 
              className="btn btn-sm md:btn-md btn-outline btn-accent font-bold">
                {" "} 
                Se connecter
              </Link>
              <Link 
              href={""} 
              className="btn btn-sm md:btn-md btn-outline ml-2 font-bold">
                {" "} 
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
