import React from 'react'

const InputField = ({search, handleChange}) => {
  return (
    <input
    type="text"
    className="search-input"
    placeholder="Search by name..."
    value={search}
    onChange={handleChange}
  />
  )
}

export default InputField