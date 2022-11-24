import { useSelector,shallowEqual } from "react-redux"
import { useParams } from "react-router-dom"

const FolderComponent = () => {
  const { folderId } = useParams()
  const { currentFolderData, childFolders } = useSelector(state => 
    ({
      currentFolderData: state.filefolders.userFolders.find((folder) => folder.docId === folderId).data,
      childFolders: state.filefolders.userFolders.find((folder) => folder.parent === folderId),
    }),shallowEqual);

  return (
    <div>
      {
        childFolders.length > 0 ? (
          <h1>
            {JSON.stringify(childFolders)}
          </h1>
        ) : (
          <p className="text-center my-5">Empty Folder</p>
        )
      }
    </div>
  )
}

export default FolderComponent