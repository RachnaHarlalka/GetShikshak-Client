import React from "react";
import './card.css'
import { useNavigate } from "react-router-dom";


export default function Card(props) {
  console.log("props inside card",props.name,props.city)
  const navigate = useNavigate();
  const handleClick=()=>{
    try{
      let url='/user';
      if(props.id) url+=`/${props.id}`;
      console.log("url",url);
      navigate(url);
    }
    catch(err){
      console.log("error",err);
    }
  }

  return (
    <div className="card bg-red-300 cursor-pointer" onClick={handleClick}>
      <img className="product--image" src={props.url} alt="product image" />
      <div className="flex justify-between my-2 p-2 border-b-[1px]">
        <h2 className="text-black font-semibold">{props.name}</h2>
        <span className="text-gray-700 ">{props.city}</span>
      </div>
      <div className="skills-tag-div text-black">
      {props.subjects.map((s,index)=>{
        return(
        <span  key={index} className="skills-tag">{s}</span>
      )
      })}
      </div>
      <p className="text-white text-sm">
        <button>
           <span>₹{props.rate}/hr</span>
           <span className="star">★★★★★</span>

        </button>
      </p>
    </div>
  );
}
