import { useEffect, useState } from "react";

export default function Github(){

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/pradeeptamta3225')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])



    return(
     <div className="bg-gray-600 text-3xl text-center p-4 text-white">GitHub Follower: {data.followers}
       <img className="rounded-full" src={data.avatar_url} alt="Git picture" width={300} /> </div>
    )
}


