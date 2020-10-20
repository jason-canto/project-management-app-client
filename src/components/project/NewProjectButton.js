import React from 'react'
import { Link } from 'react-router-dom'

function NewProjectButton() {
  return (
    <Link to="/addProject" className="btn btn-lg btn-info">
      Create a Project
    </Link>
  )
}

export default NewProjectButton
