import * as Yup from 'yup'

export const RegisterSchema=Yup.object({
    email:Yup.string().email("Please enter a valid mail").required("Email is required"),
    password:Yup.string().min(6).required("Password is required"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),
})

export const LoginSchema=Yup.object({
    email:Yup.string().email("Please enter a valid mail").required("Email is required"),
    password:Yup.string().min(6).required("Password is required"),
})

// export const TutorRegisterSchema=Yup.object({
//     subjects
// })

export const subjectSchema=Yup.object({
    subjects:Yup.array()
    .required('Required!')
    .min(1,"Must choose atleast one!")
    .max(4,"Maximum 4 subjects allowed!")
})

export const titleSchema=Yup.object({
    title:Yup.string().required('Required!').test(3,"Must have at least 12 words!",value=>{
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount>=3;
    })
})

export const aboutClassSchema=Yup.object({
    aboutClass:Yup.string().required('Required!').test(3,"Must have at least 12 words!",value=>{
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount>=3;
    })
})

export const aboutYouSchema=Yup.object({
    aboutYou:Yup.string().required('Required!').test(3,"Must have at least 12 words!",value=>{
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount>=3;
    })
})

const phoneRegExp = /^(0|91)?[6-9][0-9]{9}$/

export const classDetailsSchema=Yup.object({
    city:Yup.string().required("Required Field!").min(1,"Required Field"),
    mode:Yup.array().required("Required Field!").min(1,"Required Field"),
    language:Yup.array().required("Required Field!").min(1,"Required Field"),
    rate:Yup.string().required("Required Field!"),
    phone:Yup.string().required("Required Field!").matches(phoneRegExp,"Phone number is not valid"),
})

