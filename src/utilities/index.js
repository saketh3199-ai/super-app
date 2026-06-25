import {v4 as uuidv4} from 'uuid'

const categoriesList = [
  {
    title: "Action",
    imageLink: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&auto=format&fit=crop",
    backgroundColor: "#c2410c"
  },
  {
    title: "Comedy",
    imageLink: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=300&auto=format&fit=crop",
    backgroundColor: "#7c3aed"
  },
  {
    title: "Drama",
    imageLink: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&auto=format&fit=crop",
    backgroundColor: "#be185d"
  },
  {
    title: "Music",
    imageLink: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop",
    backgroundColor: "#0e7490"
  },
  {
    title: "Sports",
    imageLink: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&auto=format&fit=crop",
    backgroundColor: "#065f46"
  },
  {
    title: "Thriller",
    imageLink: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    backgroundColor: "#1e40af"
  },
  {
    title: "Fantasy",
    imageLink: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop",
    backgroundColor: "#92400e"
  },
  {
    title: "Romance",
    imageLink: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300&auto=format&fit=crop",
    backgroundColor: "#9d174d"
  }
]

export const updatedCategoryList = categoriesList.map
(
    (individualCategoryObject)=>
    {
        const ReformedCategoryObject = {backgroundColor:individualCategoryObject.backgroundColor,title:individualCategoryObject.title,imageLink:individualCategoryObject.imageLink,id:uuidv4()}
        return ReformedCategoryObject
    }
)