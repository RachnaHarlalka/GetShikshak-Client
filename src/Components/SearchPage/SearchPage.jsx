import SearchBox from "../SearchBox";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./style.css";

function SearchPage() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { subject, city } = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:3000/user/search";
      if (subject) url += `?subject=${subject}`;
      if (city) url += `${subject ? "&" : "?"}city=${city}`;
      const response = await axios.get(url);
      if(response){
        console.log(response);
        setData(response.data.searchedUser);
      }
    };
    fetchData();
  }, [location.search,subject,city]);

  return (
    <div className="container mx-auto" id="main-div">
      <div className="search-page-sub-div" id="search-box-div">
        <SearchBox />
      </div>
      <div className="search-page-sub-div" id="filters-div">
        {data.map((d) => (
          <div key={d._id}>
            <div>{d.role}</div>
            <div>{d.tutorForm.subjects}</div>
            <div>{d.tutorForm.city}</div>
            <div>{d.email} </div>
          </div>
        ))}
      </div>
      <div className="search-page-sub-div" id="search-page-tutor-card">
        Tutor Card
      </div>
    </div>
  );
}

export default SearchPage;
