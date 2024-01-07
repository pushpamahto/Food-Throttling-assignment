let timeout = null;

document.getElementById("searchmeal").addEventListener("input", function(){

  clearInterval(timeout);
  timeout = setTimeout(function(){
        
    searchRecipes(document.getElementById("searchmeal").value)

   },1500)
});

async function searchRecipes(query){

    try{

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    let data = await res.json();

    showRecipes(data.meals);
    }

    catch(error){
        console.log(error);
    }
    
}

function showRecipes(recipes){

    let recipeList = document.getElementById("container");
    recipeList.innerHTML = "";

    if(recipes){

        recipes.forEach(recipe => {
            recipeList.innerHTML += `

            <div>
                 <h3>${recipe.strMeal}</h3>
                 <img src = ${recipe.strMealThumb}>

            </div>
            
             `
            
        });


    }

}