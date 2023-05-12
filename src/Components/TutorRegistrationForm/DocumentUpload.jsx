import { useRef } from "react";
import PreviewDocs from "./PreviewDocs";
function DocumentUpload(props) {
  const profileRef = useRef(null);
  const identityRef = useRef(null);
  const certificateRef = useRef(null);
  return (
    <>
      <div className="md:w-[80%] md:container md:mx-auto flex my-10">
        {/* <div className="left md:w-1/2 md:container">
          <div className="bg-green-100 h-[60vh] rounded-md p-6 md:w-5/6 hidden md:block">
            <div className="text-2xl font-bold mb-3">For Your information</div>
            <div className="bg-green-100 leading-8  h-[45vh] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-track-green scrollbar-thumb-primary-color scrollbar-thumb-rounded-full scrollbar-h-0 ">
              <p>
                Upload the correct documents. Only after verification of
                document, You add will be visibke to others!
              </p>
            </div>
          </div>
        </div> */}
        <div className=" w-[100%]">
          <div className="text-3xl font-bold mb-5 ">{props.title}</div>

          <input
            ref={profileRef}
            hidden
            type="file"
            name="profilePic"
            onChange={(event) => {
              props.formik.setFieldValue(
                "profilePic",
                event.target.files[0]
              );
            }}
          />
          <input
            ref={identityRef}
            hidden
            type="file"
            name="identity"
            onChange={(event) => {
              props.formik.setFieldValue("identity", event.target.files[0]);
            }}
          />
          <input
            ref={certificateRef}
            hidden
            type="file"
            name="lastEducationalCertificate"
            onChange={(event) => {
              props.formik.setFieldValue(
                "lastEducationalCertificate",
                event.target.files[0]
              );
            }}
          />

          <div className="flex my-12 gap-4 flex-wrap ">
            <div className="uploadbtn flex flex-col justify-center items-center">
              {props.formik.values.profilePic ? (
                <PreviewDocs
                  file={props.formik.values.profilePic}
                  width="100px"
                  // height="100px"
                />
              ) : (
                <button
                  className="h-64 w-56 bg-white border-2"
                  onClick={() => {
                    profileRef.current.click();
                  }}
                >
                  Upload Profile Picture
                </button>
              )}

              {props.formik.values.profilePic && (
                <button
                  className="my-2  text-sm  border-2 w-2/3 rounded-sm p-2 transition-all ease-in-out duration-200 shadow-md hover:scale-105"
                  onClick={() => {
                    profileRef.current.click();
                  }}
                >
                  Upload Profile
                </button>
              )}

              {props.formik.errors.profilePic &&
              props.formik.touched.profilePic ? (
                <p className="text-red-500 font-bold">
                  {props.formik.errors.profilePic}
                </p>
              ) : null}
            </div>

            <div className="uploadbtn flex flex-col justify-center items-center">
              {props.formik.values.identity ? (
                <PreviewDocs
                  file={props.formik.values.identity}
                  width="100px"
                  // height="100px"
                />
              ) : (
                <button
                  className="h-64 w-56 bg-white border-2"
                  onClick={() => {
                    identityRef.current.click();
                  }}
                >
                  Upload Identity
                </button>
              )}

              {props.formik.values.identity && (
                <button
                  className="my-2 border-2 text-sm w-2/3 rounded-sm p-2 transition-all ease-in-out duration-200 shadow-md hover:scale-105"
                  onClick={() => {
                    identityRef.current.click();
                  }}
                >
                  Upload Certificate
                </button>
              )}
              {props.formik.errors.identity && props.formik.touched.identity ? (
                <p className="text-red-500 font-bold">
                  {props.formik.errors.identity}
                </p>
              ) : null}
            </div>

            {/* <div className="previewImage">
                {props.formik.values.identity && (
                  <PreviewDocs
                    file={props.formik.values.identity}
                    width="100px"
                    // height="100px"
                  />
                )}
              </div> */}

            <div className="uploadbtn flex flex-col justify-center items-center">
              {props.formik.values.lastEducationalCertificate ? (
                <PreviewDocs
                  file={props.formik.values.lastEducationalCertificate}
                  width="100px"
                  // height="100px"
                />
              ) : (
                <button
                  className="h-64 w-56 bg-white border-2"
                  onClick={() => {
                    certificateRef.current.click();
                  }}
                >
                  Upload last Educational Certificate Proof
                </button>
              )}

              {props.formik.values.lastEducationalCertificate && (
                <button
                  className="my-2  text-sm  border-2 w-2/3 rounded-sm p-2 transition-all ease-in-out duration-200 shadow-md hover:scale-105"
                  onClick={() => {
                    certificateRef.current.click();
                  }}
                >
                  Upload
                </button>
              )}

              {props.formik.errors.lastEducationalCertificate &&
              props.formik.touched.lastEducationalCertificate ? (
                <p className="text-red-500 font-bold">
                  {props.formik.errors.lastEducationalCertificate}
                </p>
              ) : null}
            </div>
          </div>
          {/* <div className="flex gap-2 my-5">
            {props.formik.values.identity && (
              <PreviewDocs
                file={props.formik.values.profilePic}
                width="180px"
                height="180px"
              />
            )}
            {props.formik.values.identity && (
              <PreviewDocs
                file={props.formik.values.identity}
                width="180px"
                height="180px"
              />
            )}
            {props.formik.values.lastEducationalCertificate && (
              <PreviewDocs
                file={props.formik.values.lastEducationalCertificate}
                width="180px"
                height="180px"
              />
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DocumentUpload;
