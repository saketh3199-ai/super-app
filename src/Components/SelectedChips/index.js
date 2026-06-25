const SelectedChips = (props)=>
{

    const {CategoryName,id,deleteCategoryObjectInList} = props


    const onClickDeleteCrossIcon = ()=>
    {
        deleteCategoryObjectInList(id)
    }

    const ChipElement = 
    <div className="selected-chip">
            <span className="chip-label">{CategoryName}</span>
            <span className="chip-cross" onClick={onClickDeleteCrossIcon}>✕</span>
    </div>
    
    return ChipElement
}

export default SelectedChips