import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function fetchData(){
   const [records , setRecords] = useState([])

   useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-01-05&sortBy=publishedAt&apiKey=8c73420e0c7f450a828621cb2540fdeb")
    .then(response => response.json())
    .then(data => setRecords (data))
    .catch(error => console.log(error))
   },[])

    return(
        <div>
            <ul>
                {records.map((list, index)=>(
                    <li key ={index}> {list.id} | {list.name}</li>
                ))}
            </ul>
        </div>
    )

}
export default NewsData;
