const CategoryCard = (props)=>
{

    const {CardObject,InsertCategoryIntoSelectedCategoryList} = props





    const onClickCategoryCard = ()=>
    {
        InsertCategoryIntoSelectedCategoryList(CardObject.title)
    }
















    const CardElement = 
    <div className="category-card-individual-container card-action" onClick={onClickCategoryCard} style={{ backgroundColor: CardObject.backgroundColor }}>
          <span className="card-title">{CardObject.title}</span>
          <img src={CardObject.imageLink} alt="Action" className="card-image"/>
    </div>
    
    return CardElement
}


export default CategoryCard