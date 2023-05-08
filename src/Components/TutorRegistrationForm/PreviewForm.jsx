import { useRecoilValue } from "recoil";
import {formDataAtom} from '../../Atom';

function PreviewForm(props) {
  const formData = useRecoilValue(formDataAtom)
  console.log("formdata",formData)
  return (
    <>

    <div className=" md:w-[90%] md:container md:mx-auto rounded-md mb-6">
          <div className="border-2 p-2 rounded-md">
            <h1 className="text-lg font-bold">Subjects</h1>
            <div className="my-2 ">
              {formData.subjects.map((data)=>( <span className="bg-gray-200 rounded-md p-1 mx-2" key={data}>{data}</span>))}
            </div>
          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">Title For the Add</h1>
            <div className="my-2">
              <p>
                {formData.title}
              </p>
            </div>
          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">About You</h1>
            <p className="my-2">
            {formData.aboutYou}
            </p>
          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">About Class</h1>
            <p className="my-2">
            {formData.aboutClass}
            </p>
          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">City</h1>
            <span> {formData.city}</span>
          </div>
          
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">Rate</h1>
            <span> {formData.rate}</span>

          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">Phone</h1>
            <span> {formData.phone}</span>

          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">Mode</h1>
            <div className="my-2 ">
            {formData.mode.map((data)=>( <span className="bg-gray-200 rounded-md p-1 mx-2"  key={data}>{data}</span>))}
            </div>
          </div>
          <div className="border-2 p-2 my-2 rounded-md">
            <h1 className="text-lg font-bold ">Language</h1>
            <div className="my-2 ">
            {formData.language.map((data)=>( <span className="bg-gray-200 rounded-md p-1 mx-2"  key={data}>{data}</span>))}

            </div>
          </div>
      </div>
    </>
  );
}

export default PreviewForm;
