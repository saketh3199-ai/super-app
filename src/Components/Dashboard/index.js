import "./index.css"
import UserInfoContextObject from "../../context/AnyNameContext";
import { useState,useEffect } from "react";
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom";

const Dashboard = (props)=>
{
    const [WeatherDesc,setWeatherDesc] = useState("")
    const [AreaTemp,setAreaTemp] = useState("")
    const [AreaPreassure,setAreaPreassure] = useState("")
    const [AreaHumidity,setAreaHumidity] = useState("")
    const [WindSpeed,setWindSpeed] = useState("")
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const [NewsTitle,setNewsTitle] = useState("")
    const [NewsDescription,setNewsDesc] = useState("")    
    const [NewsImageUrl,setNewsImageUrl] = useState("")
    const [NewsDate,setNewsDate] = useState("")
    const [NewsTime,setNewsTime] = useState("")
    const [seconds,setSECOND] = useState(60)
    const [minutes,setMINUTE] = useState(60)
    const [hours,setHOUR] = useState(3)
    const [notesText,setTEXTNOTE] = useState(JSON.parse(localStorage.getItem("NotesOfUser")))






    //THIS EFFECT HOOK CALLS WEATHER API
    useEffect
    (
        ()=>
        {
            const CallWeatherApi = async ()=>
            {
                const WeatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=739fd008bc8a2823f4488c195382b57b"
                const options = {method:"GET"}
                const Response = await fetch(WeatherApiUrl,options)
                const Data = await Response.json()
                //THE BELOW ARE TO BE STORED IN THE STATE-VARIABLE SO THAT IT CAN BE SHOWN IN WIDGET
                const {description} = Data.weather[0]
                const {temp,pressure,humidity} = Data.main
                const {speed} = Data.wind
                
                const {dt} = Data
                const date = new Date(dt * 1000)
                const FormedDate = date.toLocaleDateString(date)
                const FormedTime = date.toLocaleTimeString(date)
                

                setWeatherDesc(description)
                setAreaTemp(temp)
                setAreaPreassure(pressure)
                setAreaHumidity(humidity)
                setWindSpeed(speed)
                setDate(FormedDate)
                setTime(FormedTime)

            }
            CallWeatherApi()
        
        },[]
    )
    //THIS ABOVE EFFECT HOOK CALLS WEATHER API




    
    











    //THIS EFFECT HOOK CALLS NEWS-API
   useEffect
    (
        ()=>
        {
            const CallNewsApi = async ()=>
            {
                const NewsApiUrl = 'https://api.currentsapi.services/v1/latest-news?language=en&apiKey=0Yr-QGezFwAfGchh8hGx-4YzB8yI-nybpBXtXKkTvvFPtCbO'
                const options = {method:"GET"}
                const Response = await fetch(NewsApiUrl,options)
                const Data = await Response.json()
                const {news} = Data

                let index = 0

                const SchedulerId = setInterval
                (
                    ()=>
                    {
                        const {title, description, image, published} = news[index]
                        const NewsArticleDate = new Date(published)
                        setNewsDate(NewsArticleDate.toLocaleDateString())
                        setNewsTime(NewsArticleDate.toLocaleTimeString())
                        setNewsTitle(title)
                        setNewsDesc(description)
                        setNewsImageUrl(image)
                        index = (index + 1) % news.length
                    },5000
                )

                return ()=> clearInterval(SchedulerId)
            }
            CallNewsApi()
        },[]
)
    //THIS ABOVE EFFECT HOOK CALLS NEWS-API
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
 
    
    
    
    if (Cookies.get("isMinMoviesSelected") === undefined)
    {
        return <Redirect to="/categories" />
    }
    
    
    
    
    
    
    const DashboardConsumer = 
    <UserInfoContextObject.Consumer>
        {
            (value)=>
            {

                
                const {nameOfUser,userNameOfUser,emailOfUser,phoneNumberOfUser,ListOfSelectedCategories} = value

                













                //THE BELOW FUNCTION RENDERS PROFILE WIDGET - STARTS HERE
                const renderProfileWidget = ()=>
                (
                     <div className="widget profile-widget">
                        <div className="profile-avatar-section">
                            <div className="profile-avatar">
                            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=superapp" alt="User Avatar" className="avatar-img"/>
                            </div>
                            <div className="profile-info">
                            <p className="profile-name">{nameOfUser}</p>
                            <p className="profile-email">{emailOfUser}</p>
                            <p className="profile-username">{userNameOfUser}</p>
                            </div>
                        </div>
                        <div className="profile-chips">
                            
                            {
                                ListOfSelectedCategories.map
                            (
                                (SelectedCatObj)=>
                                {
                                    return <span className="profile-chip">{SelectedCatObj.SelectedCategoryTitle}</span>
                                }
                            )
                            }
                            
                        
                        </div>
                    </div>
                )
                //THE ABOVE FUNCTION RENDERS PROFILE WIDGET - ENDS HERE


                //THE BELOW FUNCTION RENDERS WEATHER WIDGET - STARTS HERE
                const renderWeatherWidget = ()=>
                (
                    <div className="widget weather-widget">
                    <div className="weather-date-bar">
                        <span className="weather-date">{date}</span>
                        <span className="weather-time">{time}</span>
                    </div>
                    <div className="weather-body">
                        <div className="weather-condition">
                        <span className="weather-icon">⛈</span>
                        <span className="weather-label">{WeatherDesc}</span>
                        </div>
                        <div className="weather-divider" />
                        <div className="weather-temp">
                        <span className="weather-temp-value">{AreaTemp}°C</span>
                        </div>
                        <div className="weather-divider" />
                        <div className="weather-stats">
                        <div className="weather-stat">
                            <span className="stat-icon">💨</span>
                            <div className="stat-text">
                            <span className="stat-value">{WindSpeed} km/h</span>
                            <span className="stat-label">Wind</span>
                            </div>
                        </div>
                        <div className="weather-stat">
                            <span className="stat-icon">🌡</span>
                            <div className="stat-text">
                            <span className="stat-value">{AreaPreassure} mbar</span>
                            <span className="stat-label">Pressure</span>
                            </div>
                        </div>
                        <div className="weather-stat">
                            <span className="stat-icon">💧</span>
                            <div className="stat-text">
                            <span className="stat-value">{AreaHumidity}%</span>
                            <span className="stat-label">Humidity</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                )
                //THE ABOVE FUNCTION RENDERS WEATHER WIDGET - ENDS HERE


              
                
                
                
                
                //THE BELOW FUNCTION RENDERS NEWS WIDGET - STARTS HERE
                const renderNewsWidget = ()=>
                (
                    <div className="widget news-widget">
                    <div className="news-image-container">
                        <img src={NewsImageUrl} alt="News" className="news-image"/>
                        <div className="news-image-overlay">
                        <h3 className="news-headline">{NewsTitle}</h3>
                        <span className="news-date">{NewsDate} | {NewsTime}</span>
                        </div>
                    </div>
                    <div className="news-body">
                        <p className="news-description">
                         {NewsDescription}
                        </p>
                    </div>
                    </div>
                )
                //THE BELOW FUNCTION RENDERS NEWS WIDGET - ENDS HERE
                
                
                
                
                
                
                
                //THE FUNCTION THAT STARTS THE TIMER - STARTS HERE
                const onClickStartTimer = ()=>
                {
                    const idOfScheduler = setInterval
                    (
                        ()=>
                        {
                        

                        

                            setSECOND
                            (
                                (PSV)=>
                                {
                                    if (PSV===0)
                                    {
                                        setMINUTE
                                        (
                                                (PSV)=>
                                                {
                                                    if (PSV===0)
                                                    {
                                                            setHOUR
                                                            (
                                                                (PSV)=>
                                                                {
                                                                    if (PSV===0)
                                                                    {
                                                                        clearInterval(idOfScheduler)
                                                                        setMINUTE(0)
                                                                        setSECOND(0)
                                                                        return 0
                                                                    }
                                                                    else
                                                                    {
                                                                        return PSV-1
                                                                    }
                                                                }
                                                            )
                                                        return 60
                                                    }
                                                    else
                                                    {
                                                        return PSV-1
                                                    }
                                                }



                                        )
                                        return 60
                                    }
                                    else
                                    {
                                        return PSV-1
                                    }
                                }
                            )
                        },1000
                    )
                }
                //THE FUNCTION THAT STARTS THE TIMER - ENDS HERE



                //THE BELOW CHAIN OF FUNCTIONS INCREASE/DECREASE HOUR, MINUTE, SECOND APPROPRIATELY - STARTS HERE
                const onClickIncreaseHour = ()=>
                {
                    setHOUR
                    (
                        (PSV)=>
                        {
                            return PSV+1
                        }
                    )
                }


                const onClickDecreaseHour = ()=>
                {
                    setHOUR
                    (
                        (PSV)=>
                        {
                            if (PSV === 0)
                            {
                                return 0
                            }
                            else
                            {
                                return PSV-1
                            }

                            
                        }
                    )
                }

                
                const onClickIncreaseMinutes = ()=>
                {
                    setMINUTE
                    (
                        (PSV)=>
                        {
                            if (PSV===60)
                            {
                                return 60
                            }
                            else
                            {
                                return PSV+1
                            }
                            
                        }
                    )
                }


                const onClickDecreaseMinutes = ()=>
                {
                    setMINUTE
                    (
                        (PSV)=>
                        {
                            if (PSV===0)
                            {
                                return 0
                            }
                            else
                            {
                                return PSV-1
                            }
                            
                        }
                    )
                }


                const onClickIncreaseSeconds = ()=>
                {
                    setSECOND
                    (
                        (PSV)=>
                        {
                            if (PSV===60)
                            {
                                return 60
                            }
                            else
                            {
                                return PSV+1
                            }
                            
                        }
                    )
                }

                
                const onClickDecreaseSeconds = ()=>
                {
                    setSECOND
                    (
                        (PSV)=>
                        {
                            if (PSV===0)
                            {
                                return 0
                            }
                            else
                            {
                                return PSV-1
                            }
                            
                        }
                    )
                }
                //THE ABOVE CHAIN OF FUNCTIONS UPDATE HOUR, MINUTE, SECONDS APPROPRIATELY - ENDS HERE


                //THE BELOW FUNCTION RENDERS THE TIME-WIDGET - STARTS HERE
                const renderTimerWidget = ()=>
                (
                    <div className="widget timer-widget">

                    {/* Circular visual */}
                    <div className="timer-circle-container">
                        <svg className="timer-svg" viewBox="0 0 200 200">
                        {/* Background circle */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#2a2a3a" strokeWidth="10"/>
                        {/* Progress circle */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#f87171" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference * (1- progress)} strokeLinecap="round" transform="rotate(-90 100 100)"/>
                        </svg>
                        <span className="timer-display">{hours}:{minutes}:{seconds}</span>
                    </div>

                    {/* Controls */}
                    <div className="timer-controls">
                        <div className="timer-unit">
                        <span className="timer-arrow" onClick={onClickIncreaseHour}>▲</span>
                        <span className="timer-unit-label">Hours</span>
                        <span className="timer-value">{hours}</span>
                        <span className="timer-arrow" onClick={onClickDecreaseHour}>▼</span>
                        </div>
                        <span className="timer-colon">:</span>
                        <div className="timer-unit">
                        <span className="timer-arrow" onClick={onClickIncreaseMinutes}>▲</span>
                        <span className="timer-unit-label">Minutes</span>
                        <span className="timer-value">{minutes}</span>
                        <span className="timer-arrow" onClick={onClickDecreaseMinutes}>▼</span>
                        </div>
                        <span className="timer-colon">:</span>
                        <div className="timer-unit">
                        <span className="timer-arrow" onClick={onClickIncreaseSeconds}>▲</span>
                        <span className="timer-unit-label">Seconds</span>
                        <span className="timer-value">{seconds}</span>
                        <span className="timer-arrow" onClick={onClickDecreaseSeconds}>▼</span>
                        </div>
                    </div>

                    <button className="timer-start-button" onClick={onClickStartTimer}>Start</button>
                    </div>
                )
                //THE ABOVE FUNCTION RENDERS THE TIME-WIDGET - ENDS HERE


                //THE BELOW FUNCTION STORES TEXT IN LOCAL-STORAGE - STARTS HERE
                const StoreTextEnteredByUsrInLS = (event)=>
                {
                    const NotesBeingEnteredByUsr = event.target.value
                    setTEXTNOTE(NotesBeingEnteredByUsr) 
                    const stringifiedNOTES = JSON.stringify(NotesBeingEnteredByUsr)
                    localStorage.setItem("NotesOfUser",stringifiedNOTES)
                }
                //THE ABOVE FUNCTION STORES TEXT IN LOCAL-STORAGE - ENDS HERE


                //THE BELOW FUNCTION RENDERS NOTES-WIDGET - STARTS HERE
                const renderNotesWidget = ()=>
                (
                    <div className="widget notes-widget">
                    <h2 className="notes-title">All notes</h2>
                    <p className="notes-content">
                        This is how I am going to learn MERN Stack in next 3 months.
                    </p>
                    <textarea className="notes-textarea" placeholder="Write a note..." onChange={StoreTextEnteredByUsrInLS} value={notesText} />
                    </div>
                )
                //THE ABOVE FUNCTION RENDERS NOTES-WIDGET - ENDS HERE


                const onClickBrowse = ()=>
                {
                    const {history} = props
                    history.replace("/movies")
                }



                const circumference = 2 * Math.PI * 80; // 502.65





                const TOTAL_SECONDS = 3 * 3600 + 60 * 60 + 60; 

                const timeRemaining = (hours * 3600) + (minutes * 60) + seconds;

                const progress = timeRemaining / TOTAL_SECONDS;



                const DashboardElement =  
                    <div className="dashboard-container">

                        {/* ── LEFT COLUMN ── */}
                        <div className="dashboard-left-column">

                            {/* User Profile Widget */}
                            {renderProfileWidget()}

                            {/* Weather Widget */}
                            {renderWeatherWidget()}

                        </div>

                        {/* ── MIDDLE COLUMN ── */}
                        <div className="dashboard-middle-column">

                            {/* Notes Widget */}
                            {renderNotesWidget()}

                            {/* Timer Widget */}
                            {renderTimerWidget()}

                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div className="dashboard-right-column">

                            {/* News Widget */}
                            {renderNewsWidget()}

                            {/* Browse button */}
                            <div className="browse-button-container">
                            <button className="browse-button" onClick={onClickBrowse}>Browse</button>
                            </div>

                        </div>

                    </div>
        
    
    

                return DashboardElement


            }
        }

    </UserInfoContextObject.Consumer>


    return DashboardConsumer


    
}

export default Dashboard