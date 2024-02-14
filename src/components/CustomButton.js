import React from 'react'

const CustomButton = ({handlePage, disabledButton, children}) => {
  return (
    <button
    className="pagination-button"
    onClick={handlePage}
    disabled={disabledButton}
 
  >
    {children}

  </button>
  )
}

export default CustomButton