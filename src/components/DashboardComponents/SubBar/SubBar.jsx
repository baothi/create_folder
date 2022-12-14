import React from 'react'
import "./SubBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SubBar = ({setIsCreateFolderModalOpen}) => {
  return (
    <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/dashboard">Root</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            new Folder
          </li>
        </ol>
      </nav>
      
      <ul className='navbar-nav ms-auto me-5'>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp;&nbsp;
            upload File
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp;&nbsp;
            Create File
          </button>
        </li>
        <li className="nav-item ms-2">
          <button className="btn btn-outline-dark" 
            onClick={() => setIsCreateFolderModalOpen(true)} >
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;&nbsp;
            Create Folder
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default SubBar