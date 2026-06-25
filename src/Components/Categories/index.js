import "./index.css"
import { updatedCategoryList } from "../../utilities"
import CategoryCard from "../CategoryCard"
import {useState} from "react"
import SelectedChips from "../SelectedChips"
import {v4 as uuidv4} from 'uuid'
import UserInfoContextObject from "../../context/AnyNameContext"
import Cookies from "js-cookie"

const Categories = (props)=>
{
    const [SelectedCategoriesListOfUser,setCatList] = useState([])





    
    
    
    
    
    
    
    
   
    
    const CategoryElementConsumer = 
    <UserInfoContextObject.Consumer>

        {
            (value)=>
            {
                const {SaveSelectedCategories} = value


                //FUNCTION THAT PUSHES SELECTED CATEGORIES INTO A LIST STARTS HERE
                
                const InsertCategoryIntoSelectedCategoryList = (ReceivedCategory)=>
                {
                    const DoesCategoryToBeAddedAlreadyExists = SelectedCategoriesListOfUser.some
                    (
                        (SelectedCategoryIndividualObject)=>
                        {
                            if (SelectedCategoryIndividualObject.SelectedCategoryTitle === ReceivedCategory )
                            {
                                return true
                            }
                        }
                    )

                    if (!DoesCategoryToBeAddedAlreadyExists)
                    {
                        setCatList
                        (
                            (OlderVersionCatList)=>
                            {
                            
                                
                                    const NewCatList = [...OlderVersionCatList,{id:uuidv4(),SelectedCategoryTitle:ReceivedCategory}]
                                    return NewCatList
                                
                                
                                

                                

                            
                            }
                        )

                    }



                
                }

    
                //FUNCTION THAT PUSHES SELECTED CATEGORIES INTO A LIST ENDS HERE


    
    
    
    
    
    
    
                
                //THIS FUNCTION SIMPLY SENDS BACK AN ERROR ELEMENT WHEN THE LENGTH OF LIST IS <3 - STARTS HERE
                const renderMinErrMsg = ()=>
                (
                    <p className="minimum-warning">
                        <span className="warning-icon">⚠</span>
                        Minimum 3 category required
                    </p>
                )
                //THIS FUNCTION SIMPLY SENDS BACK AN ERROR ELEMENT WHEN THE LENGTH OF LIST IS <3 - ENDS HERE
    
    
    
    
    
    
    
    
                //THIS FUNCTION RETURNS BACK THE LOGIC THAT RENDERS THE CATEGORY CARDS WHICH THE USER SELECTS - STARTS HERE
                const renderCategoryCards = ()=>
                (
                    updatedCategoryList.map
                        (
                            (CardObject)=>
                            {
                                return <CategoryCard key={CardObject.id} CardObject={CardObject} InsertCategoryIntoSelectedCategoryList={InsertCategoryIntoSelectedCategoryList}/>
                            }
                        )
                )
                //THIS FUNCTION RETURNS BACK THE LOGIC THAT RENDERS THE CATEGORY CARDS WHICH THE USER SELECTS - ENDS HERE
    
    
    


                //THIS FUNCTION DELETES THE SELECTED CATEGORY - STARTS HERE
                const deleteCategoryObjectInList = (receivedId)=>
                {
                    const UpdatedCategoryList = SelectedCategoriesListOfUser.filter
                    (
                        (CatObj)=>
                        {
                            if (CatObj.id !== receivedId)
                            {
                                return CatObj
                            }
                        }
                    )
                
                    setCatList(UpdatedCategoryList)
                }
                //THIS FUNCTION DELETES THE SELECTED CATEGORY - ENDS HERE





                //THIS FUNCTION RETURNS BACK THE LOGIC THAT RENDERS THE SELECTED CAT - STARTS HERE
                const renderSelectedCatChips = ()=>
                (
                    SelectedCategoriesListOfUser.map
                        (
                            (IndividualSelectedCategory)=>
                            {
                                return <SelectedChips key={IndividualSelectedCategory.id} id={IndividualSelectedCategory.id} CategoryName={IndividualSelectedCategory.SelectedCategoryTitle} deleteCategoryObjectInList={deleteCategoryObjectInList} />
                            }
                        )
                )
                //THIS FUNCTION RETURNS BACK THE LOGIC THAT RENDERS THE SELECTED CAT - ENDS HERE
                
                



                const onClickNextPage = ()=>
                {
                    Cookies.set("isMinMoviesSelected",true)
                    const {history} = props
                    SaveSelectedCategories(SelectedCategoriesListOfUser)
                    history.replace("/dashboard")

                }



                const CategoryElement = 
                <div className="category-container">

                {/* LEFT SIDE */}
                <div className="category-content-row">

                
                <div className="category-list-container">

                    <h1 className="category-app-name">Super app</h1>
                    <h2 className="category-main-heading">Choose your entertainment category</h2>

                    {/* Selected category chips */}
                    <div className="user-selected-categories">
                    
                    
                    {
                        renderSelectedCatChips()
                    }
                    
                
                    

                    </div>

                    {/* Warning message */}
                    {SelectedCategoriesListOfUser.length<3&&renderMinErrMsg()}
                

                </div>
                
                {/* RIGHT SIDE — category cards grid */}
                <div className="categories-to-be-selected-container">

                    
                    {renderCategoryCards()}

                

                </div>
                </div>
                {/* Next Page button — bottom right */}
                <div className="next-page-button-container">
                    {SelectedCategoriesListOfUser.length<3&&<button className="next-page-button-inactive">Next Page</button>}
                    {SelectedCategoriesListOfUser.length>=3&&<button className="next-page-button-active" onClick={onClickNextPage}>Next Page</button>}
                    
                </div>

                </div>

                return CategoryElement 
            }
        }
    </UserInfoContextObject.Consumer>
    
    

    return CategoryElementConsumer
}


export default Categories