import "./index.css"
import { useState} from "react"
import UserInfoContextObject from "../../context/AnyNameContext"
import Cookies from "js-cookie"

const Registration = (props)=>
{

    const [name,setName] = useState("")
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [mobileNum,setMobileNum] = useState("")
    
    
    const [isNameEmpty,setIsNameEmpty] = useState(false)
    const [isUserNameEmpty,setIsUserNameEmpty] = useState(false)
    const [isEmailEmpty,setIsEmailEmpty] = useState(false)
    const [isMobileNumEmpty,setIsMobileNumEmpty] = useState(false)
    const [isChecked,setIsCheckedBox] = useState(false)
    const [isSubmitButtonClicked,setIsSubmitBtnClicked] = useState(false)



















 





    const RegistrationElementConsumer = 
    <UserInfoContextObject.Consumer>
        {
            

            (value)=>
            {


                const {SaveUserInfo} = value

                //onchange event-listener-1 starts here
                const registerPersonalName = (event)=>
                {
                    const PersonalNameBeingEntered = event.target.value
                    setName(PersonalNameBeingEntered)
                }
                //onchange event-listener-1 ends here











    














                // onchange event-listener-2 starts here
                const registerUserName = (event) =>
                {
                    const UserNameBeingEnteredByUser = event.target.value
                    setUserName(UserNameBeingEnteredByUser)
                }
                //onchange event-listener-2 ends here


















                //onchange event-listener-3 starts here

                const registerEmail = (event)=>
                {
                    const EmailBeingEnteredByUser = event.target.value
                    setEmail(EmailBeingEnteredByUser)
                }

                //onchange event-listener-3 ends here


















                //onchange event-listner-4 starts here

                const registerPhoneNumber = (event) =>
                {
                    const PhoneNumBeingEnteredByUser = event.target.value
                    setMobileNum(PhoneNumBeingEnteredByUser)

                }


                //onchange event-listener-4 ends here

















                //onchange event-listener-5 starts here
                
                const checkIsChecked = (event)=>
                {
                    setIsCheckedBox(event.target.checked)
                    
                }

                //onchange event-listner-5 ends here








                //onblur event-listener-1 starts here
                const checkIsNameEmpty = ()=>
                {
                    const IsNameEmptyOrNot = name.length===0?true:false

                    if (IsNameEmptyOrNot)
                    {
                        setIsNameEmpty(true)
                    }
                    else
                    {
                        setIsNameEmpty(false)
                    }
                }
                //onblur event-listener-1 ends here







                //onblur event-listener-2 starts here
                const checkIsUserNameEmpty = ()=>
                {
                    const isUserNameEmptyOrNot = userName.length===0?true:false

                    if (isUserNameEmptyOrNot)
                    {
                        setIsUserNameEmpty(true)
                    }
                    else
                    {
                        setIsUserNameEmpty(false)
                    }
                }
                //onblur event-listener-2 ends here








                //onblur event-listener-3 starts here
                const checkIsEmailEmpty = ()=>
                {
                    const IsEmailEmptyOrNot = email.length===0?true:false

                    if (IsEmailEmptyOrNot)
                    {
                        setIsEmailEmpty(true)
                    }
                    else
                    {
                        setIsEmailEmpty(false)
                    }
                }
                //onblur event-listener-3 ends here

















                //onblur event-listener-4 starts here
                const checkIsMobileNumberEmpty = ()=>
                {
                    const IsMobileNumEmptyOrNot = mobileNum.length === 0 ?true:false

                    if (IsMobileNumEmptyOrNot)
                    {
                        setIsMobileNumEmpty(true)
                    }
                    else
                    {
                        setIsMobileNumEmpty(false)
                    }
                }
                //onblur event-listener-4 ends here














                //FUNCTION THAT RETURNS ERROR MESSAGE ELEMENT STARTS HERE
                const renderErrorMessage = ()=>
                (
                    <p className="error-message">* This field is required</p>
                )
                //FUNCTION THAT RETURNS ERROR MESSAGE ELEMENT ENDS HERE
    






                const onClickSignUp = ()=>
                {
                    setIsSubmitBtnClicked(true)
                    if (name.length === 0)
                    {
                        setIsNameEmpty(true)
                    }

                    if (userName.length === 0)
                    {
                        setIsUserNameEmpty(true)
                    }

                    if (email.length===0)
                    {
                        setIsEmailEmpty(true)
                    }

                    if (mobileNum.length===0)
                    {
                        setIsMobileNumEmpty(true)
                    }

                    if (isChecked === false)
                    {
                        setIsCheckedBox(false)
                    }

                    if (name.length !== 0 && userName.length !== 0 && email.length !== 0 && mobileNum.length !== 0 && isChecked === true)
                    {
                        Cookies.set("isSignedIn",true)
                        SaveUserInfo(name,userName,email,mobileNum)
                        const {history} = props
                        history.replace("/categories")

                    }
                    
                }




             



                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                //THE BELOW ALL ARE INDIVIDUAL-SPECIFIC-VALIDITY CHECKS
                
                const renderNameValidations = ()=>
                {
                    if (/[^a-zA-Z ]/.test(name))
                    {
                        return <p className="error-message">*No Numbers, No Special-Characters. Only Alphabets</p>
                    }
                    
                }

                const renderUserNameValidations = ()=>
                {
                 
                 if(/[^a-zA-Z0-9]/.test(userName))  
                 {
                    return <p className="error-message">*Alpha-numeric only. No white-spaces, No Special-Characters</p>
                 }   
                    
                }

                const renderEmailValidations = ()=>
                {
                    if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                    {
                         return <p className="error-message">*Enter a valid Email Address</p>
                    }
                       
                }

                const renderPhoneNumberValidations = ()=>
                {
                    if (mobileNum.length > 0 && !/^\d{10}$/.test(mobileNum))
                    {
                        return  <p className="error-message">*Enter a valid 10-digit mobile number</p>
                    } 
                }
                //THE ABOVE ALL ARE INDIVIDUAL-SPECIFIC-VALIDITY CHECKS
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                const RegistrationElement=
                 <div className="registration-total-container">

                    {/* LEFT SIDE */}
                    <div className="discover-new-things-container">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&auto=format&fit=crop" alt="Super App Background" className="discover-bg-image"/>
                        <div className="discover-overlay" />
                        <h1 className="discover-heading">
                        Discover new things on Superapp
                        </h1>
                    </div>

                        {/* RIGHT SIDE */}
                        <div className="registration-container">

                            {/* App name + subtitle */}
                            <div className="app-name-do-action-container">
                            <h1 className="app-name">Super app</h1>
                            <p className="app-subtitle">Create your new account</p>
                            </div>

                            {/* Form fields + signup button */}
                            <div className="registration-form-signup-button-container">
                                <input type="text" placeholder="Name" className="reg-input" onChange={registerPersonalName} onBlur={checkIsNameEmpty} value={name}/>
                                {isNameEmpty&&renderErrorMessage()}
                                {renderNameValidations()}
                                
                                <input type="text" placeholder="UserName" className="reg-input" onChange={registerUserName} onBlur={checkIsUserNameEmpty} value={userName}/>
                                {isUserNameEmpty&&renderErrorMessage()}
                                {renderUserNameValidations()}
                                
                                <input type="email" placeholder="Email" className="reg-input" onChange={registerEmail} value={email} onBlur={checkIsEmailEmpty}/>
                                {isEmailEmpty&&renderErrorMessage()}
                                {renderEmailValidations()}
                                
                                <input type="tel" placeholder="Mobile" className="reg-input" onChange={registerPhoneNumber} value={mobileNum} onBlur={checkIsMobileNumberEmpty}/>
                                {isMobileNumEmpty&&renderErrorMessage()}
                                {renderPhoneNumberValidations()}
                                
                                <div className="checkbox-row">
                                    <input type="checkbox" id="share-data" className="reg-checkbox" value={isChecked} onChange={checkIsChecked} />
                                    <label htmlFor="share-data" className="checkbox-label">
                                    Share my registration data with Superapp
                                    </label>
                                    
                                    
                                    
                                </div>
                                {(isSubmitButtonClicked&&!isChecked)&&renderErrorMessage()}

                                <button className="signup-button" onClick={onClickSignUp}>SIGN UP</button>
                            </div>

                            {/* Terms and agreements */}
                            <div className="terms-agreements-explanation-container">
                            <p className="terms-text">
                                By clicking on Sign up, you agree to Superapp{" "}
                                <span className="terms-highlight">Terms and Conditions of Use</span>
                            </p>
                            <p className="terms-text">
                                To learn more about how Superapp collects, uses, shares and protects
                                your personal data please head Superapp{" "}
                                <span className="terms-highlight">Privacy Policy</span>
                            </p>
                            </div>

                        </div>
                </div>

                return RegistrationElement
            }
        }
       
    </UserInfoContextObject.Consumer>

    return RegistrationElementConsumer
}

export default Registration