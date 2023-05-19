import { atom } from "recoil";
import { useEffect } from "react";
export const successState = atom({
  key: "successState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const authTokenAtom = atom({
  key: "authTokenAtom",
  default: JSON.parse(sessionStorage.getItem("token")),
});

const user = JSON.parse(sessionStorage.getItem("user"));

export const userDataAtom = atom({
  key: "userData",
  default: {
    name:(user && user.name) || "",
    email: (user && user.email) || "",
    role: (user && user.role) || "",
    subjects: (user && user.tutorForm.subjects) || [],
    title: (user && user.tutorForm.title) || "",
    aboutYou: (user && user.tutorForm.aboutYou) || "",
    aboutClass: (user && user.tutorForm.aboutClass) || "",
    city: (user && user.tutorForm.city) || "",
    mode: (user && user.tutorForm.mode) || [],
    language: (user && user.tutorForm.language) || [],
    rate: (user && user.tutorForm.rate) || "",
    phone: (user && user.tutorForm.phone) || "",
    profilePic: (user && user.profilePic) || "",
    identity: (user && user.tutorForm.identity) || "",
    lastEducationalCertificate:
      (user && user.tutorForm.lastEducationalCertificate) || "",
    isProfileVerified: "",
  },
});
