import { Redirect,Route } from "react-router-dom"
import Cookies from "js-cookie"
const Protectedroute = (props)=>
{
    const CookieFetched = Cookies.get("isSignedIn")

    if (CookieFetched === undefined)
    {
        return    <Redirect to="/" />
    }

    return <Route {...props} />


}

export default Protectedroute