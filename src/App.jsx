import './App.css'
import Article from './components/Article'
import ArticleNavbar from './components/ArticleNavbar'
import Navbar from './components/Navbar'
import mainImg from "./assets/mainImg.png"

function App() {

  return <div className='flex flex-col justify-center items-center w-full'>
    <Navbar />
    <div
      style={{ backgroundImage: `url(${mainImg})`, backgroundSize: "cover" }}
      className="fill-neutral-900 h-[30vh] sm:h-[70vh] flex flex-col justify-end w-full"
    >
      <div className="flex justify-end items-start m-2.5 h-full sm:hidden text-center ">
        <button className='border border-white text-white p-1.5'>Join Group</button>
      </div>

      <div className='m-12'>
        <h1 className='font-bold text-sm text-white sm:text-3xl'>Computer Engineering</h1>
        <p className='text-white text-xs sm:text-sm'>142,765 Computer Engineers follow this
        </p>
      </div>
    </div>

    <ArticleNavbar />
    <Article />

  </div>
}

export default App
