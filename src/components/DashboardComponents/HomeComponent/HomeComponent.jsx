import React from 'react'
import ShowItems from '../../ShowItems/ShowItems'
import { useSelector, shallowEqual } from 'react-redux';

const HomeComponent = () => {
  const folders = ["New folder","New folder 2"]
  const files = [{name: "New file"},{name: "New file 2"}]
  const {isLoading, userFolders} = useSelector((state) =>({
    isLoading: state.filefolders.isLoading,
    userFolders: state.filefolders.userFolders,
  }), shallowEqual)
  return (
    <div className='col-md-12 w-100'>
      {
        isLoading ? (<h1 className='display-1 my-5 text-center'>Loading...</h1>)
                  : (
                    <>
                      <ShowItems title={"Created Folders"} type={"folder"} items={userFolders} />
                      <ShowItems title={"Created File"} type={"file"} items={files} />
                    </>
                  )

      }
      
    </div>
  )
}

export default HomeComponent