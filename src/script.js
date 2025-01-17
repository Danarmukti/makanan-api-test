$.getJSON("api/data.json", function (data) {
  let recipes = data.recipes;

  $.each(recipes, function (i, recipes) {
    $("#card").append(`<div
          class="col-md-3 py-4 d-flex justify-content-center justify-content-md-start"
        >
          <div class="card" style="width: 18rem">
            <!-- isi card -->
             <img
              src="${recipes.image}"
              alt="${recipes.name}"
              style="width: 100%; height=100px"
            />
            <div class="card-body">
              <h5 class="card-title">${recipes.name}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="detail.html?id=${recipes.id}" class="btn btn-dark recipes-btn">See Recipes</a>
            </div>
          </div>
        </div>`);
  });
});
$.getJSON("api/data.json", function (data) {
  let recipes = data.recipes;

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");
  console.log(recipeId);
  $.each(recipes, function (i, recipes) {
    const recipe = recipeId;
    if (recipe == recipes.id) {
      $("#isiDetail").append(`<div class="col-md">
        <div class="p-4 " >
            <img
            src="${recipes.image}"
            alt="${recipes.name}"
            class="w-100 rounded-4"
          />
        </div>  
        
        </div>
        <div class="col-md">
          <h3 class="mt-5 mt-md-0">${recipes.name}</h3>
          <caption>
            <h6>Rating : ${recipes.rating}</h6>
            <h6>Kalori : ${recipes.caloriesPerServing} kal</h6>
            <h6>Masakan : ${recipes.cuisine}</h6>
            <h6>Tipe : ${recipes.mealType}</h6>
          </caption>
          <h5>Ingredients:</h5>
          <p>
            <ul>
               ${recipes.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
               
            </ul>
          </p>
          <h5>Instruction:</h5>
          <p>
            <ul> 
             ${recipes.instructions.map((ing) => `<li>${ing}</li>`).join("")}
            </ul>
          </p>
        </div>`);
    }
  });
});
