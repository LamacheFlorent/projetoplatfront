export const FETCH_RECIPES_SECTION1 = 'FETCH_RECIPES_SECTION1';
export const FETCH_RECIPES_SECTION2 = 'FETCH_RECIPES_SECTION2';
export const FETCH_RECIPES_SECTION3 = 'FETCH_RECIPES_SECTION3';
export const FETCH_RECIPES_SEARCH = 'FETCH_RECIPES_SEARCH';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';
export const SAVE_FAVORITE_RECIPES = 'SAVE_FAVORITE_RECIPES';
export const FETCH_RECIPES_GENDER = 'FETCH_RECIPES_GENDER';

// fonctions (sections 1 2 3) qui fetch les recettes de l'api en fonctions des endpoint 
export const fetchRecipesSection1 = () => ({
    type: FETCH_RECIPES_SECTION1
  });

  export const fetchRecipesSection2 = () => ({
    type: FETCH_RECIPES_SECTION2
  });
  
  export const fetchRecipesSection3 = () => ({
    type: FETCH_RECIPES_SECTION3
  });

  //fonction qui fetch les recettes de l'api suite à une recherche dans l'input du formulaire de recherche (avec mot clé)
  export const fetchRecipesSearch = () => ({
    type: FETCH_RECIPES_SEARCH
  });

  // fonction qui récupère les recettes (response.data.results) après le fetch selon un identifiant (appelée dans les fonctions fetch)
  export const saveRecipes = (recipes, identifier) => ({
    type: SAVE_RECIPES,
    recipes,
    identifier
  });

  // fonction qui répond au onChange de l'input et récupère la nouvelle valeur rentrée par l'utilisateur
  export const changeSearchInput = (newValue) => ({
    type: CHANGE_SEARCH_INPUT,
    newValue
  });

  // fonction qui fetch les recettes favotites de l'utilisateur connecté depuis la BDD 
  export const fetchFavoriteRecipes = () => ({
    type: FETCH_FAVORITE_RECIPES,
  });

  // fonction qui récupère les recettes favotites de l'utilisateur connecté
  export const saveFavoriteRecipes = (favoriteRecipes) => ({
    type: SAVE_FAVORITE_RECIPES,
    favoriteRecipes
  });

  // fonction qui fetch les recettes de l'api selon certains critères (genre = item de la navbare, value = link cliqué)
  export const fetchRecipesGender = (gender, value) => ({
    type: FETCH_RECIPES_GENDER,
    gender,
    value
  });