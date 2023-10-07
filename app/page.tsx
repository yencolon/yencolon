import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center flex-col flex-1 w-full">
        <p className="text-7xl font-bold text-left first-letter:text-cyan-700">
          Yen Colon
        </p>
        <p className="text-lg font-light text-left pt-2">
          Software developer
        </p>
        <div className="pt-4">
          <div className="w-3/6">
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Software developer with over 5 years of experience in the field, proficient in languages such as JavaScript, TypeScript, Java, and Kotlin. 
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full">
        <footer className="flex justify-end flex-col flex-1 w-full">
          <p>
            Yen Colon © Copyright 2023. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  )
}
