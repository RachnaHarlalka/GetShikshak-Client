// console.log(content)
export const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#008300' : '#008300',
      boxShadow: state.isFocused ? '#008300' : '#008300',
      '&:hover': {
        borderColor: "#0a4a40"
      },
      borderColor:"#0a4a40"

    })
  };


  // console.log(content)
export const SearchStyle = {
  control: (provided, state) => ({
    ...provided,
    minWidth:"250px",
    minHeight:"40px",
    borderRadius:"0",
    borderColor: state.isFocused ? 'none' : 'none',
    boxShadow: state.isFocused ? 'none' : 'none',

    border:"none",
    '&:hover': {
      borderColor: "#0a4a40"
    },
    borderColor:"#0a4a40"

  }),
  option:(provided,state)=>({
    ...provided,
    ['@media(max-width:600px)']:{
      borderRadius:"0px 0px 0px 0px",

    }
    
  })
};