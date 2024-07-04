import { useEffect, useState } from "react";

export default function Github(){


    // const [loading , setLoading] = useState(true)

    // const [error , setError] = useState(null)

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/pradeeptamta3225')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://api.github.com/users/pradeeptamta3225')
    //         setData(response.data);
    //         setLoading(false);
    //       } catch (error) {
    //         setError(error);
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);


    return(
     <div className="bg-gray-600 text-3xl text-center p-4 text-white">GitHub Follower: {data.followers}
       <img className="rounded-full" src={data.avatar_url} alt="Git picture" width={300} /> </div>
    )
}


