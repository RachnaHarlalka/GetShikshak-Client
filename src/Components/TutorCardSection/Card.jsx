import React from "react";
import './card.css'

export default function Card(props) {
  return (
    <div className="card bg-red-300">
      <img className="product--image" src={props.url} alt="product image" />
      <div className="flex justify-around my-2 border-b-[1px]">
        <h2 className="text-black font-semibold">{props.email}</h2>
      </div>
      <div className="skills-tag-div text-black">
      {props.subjects.map((s,index)=>{
        return(
        <span  key={index}  className="skills-tag">{s}</span>
      )
      })}
      </div>
      {/* <div className="skills-tag-div text-black">
        <span className="skills-tag">JS</span>
        <span class="skills-tag">DBMS</span>
        <span class="skills-tag">Data Structure</span>
        <span class="skills-tag">Web Development</span>
        <span class="skills-tag">PHP</span>
      </div> */}
      <p className="text-white text-sm">
        <button>
           <span>₹{props.rate}/hr</span>
           <span className="star">★★★★★</span>

        </button>
      </p>
    </div>
  );
}
