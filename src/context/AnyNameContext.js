import React from "react";

const UserInfoContextObject = React.createContext
(
    {
        SaveUserInfo:()=>{},
        SaveSelectedCategories:()=>{},
        nameOfUser:"",
        userNameOfUser:"",
        emailOfUser:"",
        phoneNumberOfUser:"",
        ListOfSelectedCategories:[]
    }
)


export default UserInfoContextObject