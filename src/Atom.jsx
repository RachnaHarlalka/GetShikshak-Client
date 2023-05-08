import {atom} from 'recoil'
export const successState = atom({
    key: 'successState', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });

export const authTokenAtom = atom({
  key: "authTokenAtom",
  default: localStorage.getItem("authToken"),
});

export const formDataAtom = atom({
  key:"formDataAtom",
  default:{
      email:"",
      role:"",
      subjects:[],
      title: "",
      aboutYou: "",
      aboutClass: "",
      city: "",
      mode:[],
      language: "",
      rate: "",
      phone: "",
    }
})