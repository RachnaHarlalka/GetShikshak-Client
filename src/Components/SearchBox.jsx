import { GoSearch } from "react-icons/go";
import Select from "react-select";
import { Formik, useFormik } from "formik";
import { SearchStyle } from "../styleClasses";
import { useNavigate, useSearchParams } from "react-router-dom";

import "../index.css";

const cityOptions = [
  { value: "Assam", label: "Assam" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gujarat", label: "Gujarat" },
];
function SearchBox() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const subject = searchParams.get('subject');
  const city = searchParams.get('city');

  const initialValues = {
    subject:subject || "",
    city:city || "",
  };

  let formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        let subject=values.subject;
        let city=values.city;
        let url = "/search";
        if (subject !== "") url += `?subject=${subject}`;
        if (city !== "") url += `${subject === "" ? "?" : "&"}city=${city}`;
        navigate(url);
      } catch (err) {
        console.log("search error", err);
      }
    },
  });
  return (
    <form className="h-fit" id="search-box" onSubmit={formik.handleSubmit}>
      <Select
        id="searchSelect"
        options={cityOptions}
        onChange={(selectedValue) =>
          formik.setFieldValue("city", selectedValue.value)
        }
        value={cityOptions.find(
          (option) => option.value === formik.values.city
        )}
        isSearchable
        placeholder="Search by city name"
        noOptionsMessage={() => "No such city"}
        styles={SearchStyle}
      />
      <div id="searchSubject" className=" flex">
        <input
          type="text"
          name="subject"
          className="p-2 border-0 "
          id="input-box"
          placeholder="Search by Subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
        />
        {/* <Link to="/searchPage"> */}
        <button className="flex justify-center items-center" id="search-btn">
          <GoSearch />
        </button>
      </div>
      {/* </Link> */}
    </form>
  );
}

export default SearchBox;
