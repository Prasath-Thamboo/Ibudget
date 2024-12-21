import Image from "next/image";

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
          </div>
        </div>
      </div>
    </div>
  );
}
