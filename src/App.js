import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  //useState
  const {loading, data}=useFetch()
  const [page, setPage]=useState(0)
  const [followers, setFollowers]=useState([])
  //useEffect
  useEffect(()=>{
    if(loading)return
    setFollowers(data[page])
  },[loading,page])
  //handlePage-function
   const handlePage = (index)=>{
    setPage(index)
   } 
  return(
    <main>
      <div className="section-title">
        <h1>{loading?'loading...':'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower)=>{
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
        {/* important */}
        {!loading&&        
        <div className="btn-container">
          {data.map((item, index)=>{
            return(
              <button className={`page-btn ${index === page?'active-btn':null}`} key={index} onClick={()=>handlePage(index)}>
                {index + 1}
              </button>
            )
          })}
        </div>
        }
      </section>
    </main>
    )
}

export default App
