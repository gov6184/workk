import { Card } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductAddToCart from '../comp/cards'
import { Navigate } from 'react-router'

export default function Home() {
    let [data,setdata]=useState([])
    let val=JSON.parse(localStorage.getItem("productId"))
    useEffect(()=>{
        if(val){
            console.log("auth")
        }else{
            alert("please register")
            Navigate("/register")
        }
    },[])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            console.log(res.data)
            setdata(res.data.products)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div style={{"display":"grid","gridTemplateColumns":"repeat(3,300px)", justifyContent:"center"}}>
        {
            data.map((elem)=>{
                return(
                    <div>
                        <ProductAddToCart elem={elem}/>
                    </div>
                )
            })
        }
    </div>
  )
}
