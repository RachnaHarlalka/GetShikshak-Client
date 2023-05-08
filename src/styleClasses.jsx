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