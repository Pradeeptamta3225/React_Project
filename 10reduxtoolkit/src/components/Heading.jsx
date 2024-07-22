import myImg from "../assets/myImg.jpg"

export default function App() {
  
    return (
     <>
<div className="relative w-full h-64">
      <img
        src={myImg}
        alt="image"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">ToDo App | Pradeep </span>
      </div>
    </div>
     {/* <div>
        <h1 className="bg-[#123455] p-14 font-mono text-5xl text-red-100 tracking-normal ">ToDo App | Pradeep </h1>
     </div> */}
     </>
    )
  }
  
 