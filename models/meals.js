class Meal{
    constructor(
        id,
        categoryIds,
        title
        ,affordability
        ,imageUrl
        ,steps
        ,ingredients
        ,duration
        ,complexity
      

     
        ,isGlutenFree
        ,isVegan
        ,isVegetarian
        ,isLactoseFree
    )
    {
        this.id=id,
        this.categoryIds=categoryIds
        this.title=title
        this.imageUrl=imageUrl
        this.ingredients=ingredients
        this.steps=duration
        
        this.complexity=complexity
        this.duration=steps
        this.affordability=affordability
       
 

    
    
        this.isGlutenFree=isGlutenFree
        this.isVegan=isVegan
        this.isVegetarian=isVegetarian
        this.isLactoseFree=isLactoseFree
    }
}

export default Meal