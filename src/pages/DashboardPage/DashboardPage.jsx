import React, {useEffect, useState}  from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';

import Navbar from '../../components/DashboardComponents/Navbar/Navbar';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import { getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Route, Routes } from 'react-router-dom';

const DashboardPage = () => {

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  

  const {isLoggedIn, isLoading, userId } = useSelector((state) => ({
    isLoggedIn:state.auth.isAuthenticated,
    isLoading:state.filefolders.isLoading,
    userId: state.auth.user.uid,
  }),shallowEqual);
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() =>{
    if(!isLoggedIn) {
      navigate("/");
    }
  },[]);
  
  useEffect(() =>{
    if(!isLoading && !userId) {
      dispatch(getFolders(userId));
    }
  },[isLoading,userId, dispatch]);

  return (
    <>
    {
      isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )
    }
      <Navbar />
      <SubBar
        setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} 
      />
      <Routes>
        <Route path="" elements={<HomeComponent />} />
      </Routes>
      
    </>
  )
}

export default DashboardPage