import React from 'react'

function SkillIcon( {name, logo} ) {
  return (
    <>
      <p>{name}</p>
      <button>
        <img src={"/public/images/icons/" +logo +".png"} alt="javascript logo" />
      </button>
    </>
  )
}

export default SkillIcon
