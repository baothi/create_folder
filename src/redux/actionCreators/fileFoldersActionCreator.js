import * as types from "../actionsTypes/fileFoldersActionTypes";
import fire from "../../config/firebase";



// actions
const addFolder = (payload)=>({
  type: types.CREATE_FOLDER,
  payload
});

const addFolders = (payload)=>({
  type: types.ADD_FOLDER,
  payload
});

const setLoading = (payload)=>({
  type: types.SET_LOADING,
  payload
});


// actions creators

export const createFolder = (data) => (dispatch) => {
  console.log(data);
  fire
    .firestore()
    .collection("folders")
    .add(data)
    .then(async (folder) =>{
      const folderData = await (await folder.get()).data();
      dispatch(addFolder(folderData));
      alert("Folder created successfully")
  });
};

export const getFolders = (userId) => (dispatch) => {
  dispatch(setLoading(true));
  fire
    .firestore()
    .collection("folders")
    .where("userId","===",userId)
    .get()
    .then(async (folder) =>{
      const folderData = await addFolders.docs.map((folder) => folder.data());
      dispatch(addFolders(folderData));
      dispatch(setLoading(false));
  });
};





