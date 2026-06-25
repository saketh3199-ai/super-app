import {Switch,Route} from "react-router-dom"
import Registration from "./Components/Registration"
import {useState} from "react"
import UserInfoContextObject from "./context/AnyNameContext"
import Categories from "./Components/Categories"
import Dashboard from "./Components/Dashboard"
import Movies from "./Components/Movies"
import Protectedroute from "./Components/Protectedroute"

const App = ()=>
{

  const [nameOfUser,setNameOfUser] = useState("")
  const [userNameOfUser,setUserNameOfUser] = useState("")
  const [emailOfUser,setEmailOfUser] = useState("")
  const [phoneNumberOfUser,setPhoneNumberOfUser] = useState("")
  const [ListOfSelectedCategories,setSelectedListCat] = useState([])


  const SaveUserInfo = (nameReceived,userNameReceived,emailReceived,phoneNumberReceived)=>
  {
    
    setNameOfUser(nameReceived)
    setUserNameOfUser(userNameReceived)
    setEmailOfUser(emailReceived)
    setPhoneNumberOfUser(phoneNumberReceived)



  }








  //THIS FUNCTION SAVES THE SELECTED CATEGORIES INTO THE GLOBAL STATE - STARTS HERE
  const SaveSelectedCategories = (ReceivedSelectedCatList)=>
  {
    setSelectedListCat(ReceivedSelectedCatList)
  }
  //THIS FUNCTION SAVES THE SELECTED CATEGORIES INTO THE GLOBAL STATE - ENDS HERE







  // console.log(nameOfUser,userNameOfUser,emailOfUser,phoneNumberOfUser,ListOfSelectedCategories)






  const AppElement = 

  <UserInfoContextObject.Provider value={{SaveUserInfo:SaveUserInfo,SaveSelectedCategories:SaveSelectedCategories,nameOfUser:nameOfUser,userNameOfUser:userNameOfUser,emailOfUser:emailOfUser,phoneNumberOfUser:phoneNumberOfUser,ListOfSelectedCategories:ListOfSelectedCategories}}>

      <Switch>
        <Route exact path="/" component={Registration} />
        <Protectedroute exact path="/categories" component={Categories} />
        <Protectedroute exact path="/dashboard" component={Dashboard} / >
        <Protectedroute exact path="/movies" component= {Movies} />
      </Switch>

  </UserInfoContextObject.Provider>

  return AppElement

}

export default App