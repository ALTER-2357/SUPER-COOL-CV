import Head from 'next/head'

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-14  ">
        <h1 className="mt-10 text-6xl font-bold"> lewis mills</h1>
        <div className="mt-5 text-base "> 
        
        <div><a href="lewismills290@gmail.com">lewismills290@gmail.com</a> </div> 
        
        <div><a href="https://github.com/ALTER-2357">github.com/ALTER-2357</a></div>


        </div>


        


    

        <div> <h3 className="text-6xl mt-10 font-semibold flex ">Side projects</h3>


        </div>


        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">

       

          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">CODENAME-NEXT</h3>
            <p className="mt-4 text-xl">
            CODENAME-NEXT is a backend writin go and use mysql as a database
            </p>
          </a>



          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">CODENAME-CV</h3>
            <p className="mt-4 text-xl">
              This cv is made with next.js and tailwind
            </p>
          </a>
           </div>


     
           <div className="max-w-4xl mt-6 sm:w-full">

            <h3 className="text-6xl font-semibold flex ">Education</h3>

            <h4 className="max-w-4xl mt-10 sm:w-full text-4xl font-semibold "> September 2014 - april 2018 </h4>
            <h3  className="max-w-4xl mt-6 sm:w-full text-2xl font-semibold " > belfast royal academy, belfast, Northen ireland </h3>
            <h4 className="max-w-4xl mt-6 sm:w-full text-4xl font-semibold " >june 2018 - june 2019 </h4>
            <h3 className="max-w-4xl mt-6 sm:w-full text-2xl font-semibold " >ernulf academy, st.neots, england</h3> 
            <h4 className="max-w-4xl mt-6 sm:w-full text-4xl font-semibold " > september 2019- june 2022 </h4>
            <h3 className="max-w-4xl mt-6 sm:w-full text-2xl font-semibold " >Cambridge regonal collage, Cambridge, England</h3>
           </div>




      </main>

     






      <footer className="mt-32 flex items-center justify-center w-full h-24 border-t ">
        <a
       
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"

        >
       Lewis mills
        </a>
      </footer>
    </div>
  )
}
