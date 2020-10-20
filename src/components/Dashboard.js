import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem'
import NewProjectButton from './project/NewProjectButton'

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <NewProjectButton />
              <br />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
