import SearchBox from "../Components/SearchBox"
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "./TutorCardSection/Card";

function SearchResult() {
  const [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const subject = searchParams.get('subject');
  const city = searchParams.get('city');
  console.log("subject,city",subject,city);
  
  const fetchData = async (subject, city) => {
    console.log("search Page")
    // console.log(subject,city,"Subject,city")
    let url = `http://localhost:3000/user/search`;
    if (subject) url += `?subject=${subject}`;
    if (city) url += `${subject ? "&" : "?"}city=${city}`;
    const response = await axios.get(url);
    console.log(response.data.searchedUser);
    setData(response.data.searchedUser);
  };

  console.log("search")

  useEffect(() => {
    fetchData(subject, city);
  }, [location.search]);

  return (
    <div className="container mx-auto" id="main-div">
    <div className="search-page-sub-div" id="search-box-div">
      <SearchBox />
    </div>
    <div className="search-page-sub-div" id="filters-div">
      {data && data.map((d,index) => (
        <>
        {/* <Card 
        key={d.id}
        url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        email="rachna@gmail.com"
        subjects={d.tutorForm.subjects}
        rate={d.tutorForm.rate}
        /> */}
        <div key={d._id}>
          <div>{d.role}</div>
          <div>{d.tutorForm.subjects}</div>
          <div>{d.tutorForm.city}</div>
          <div>{d.email} </div>
        </div>
        </>
      ))}
    </div>
    <div className="search-page-sub-div" id="search-page-tutor-card">
      Tutor Card
    </div>
  </div>
  );
}

export default SearchResult;
