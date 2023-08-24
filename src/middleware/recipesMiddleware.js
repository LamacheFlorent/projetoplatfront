import axios from 'axios';
import {
  FETCH_RECIPES_SECTION1,
  FETCH_RECIPES_SECTION2,
  FETCH_RECIPES_SECTION3,
  saveRecipes,
} from '../actions/recipes';

const APIkey = 'b7dc8a490af6435f8132de0a24dfcd71';
const baseUrl = 'https://api.spoonacular.com/recipes/';

const nameSection1 = "cocktails";
const nameSection2 = "salad";
const nameSection3 = "summer";

const recipesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_RECIPES_SECTION1:
        axios
          .get(`${baseUrl}complexSearch?query=${nameSection1}&apiKey=${APIkey}`)
          .then((response) => {
            console.log(response.data.results);
            store.dispatch(saveRecipes(response.data.results));
          })
          .catch((error) => {
            console.log(error);
          });
        break;

        case FETCH_RECIPES_SECTION2:
          axios
            .get(`${baseUrl}complexSearch?query=${nameSection2}&apiKey=${APIkey}`)
            .then((response) => {
              console.log(response.data.results);
              store.dispatch(saveRecipes(response.data.results));
            })
            .catch((error) => {
              console.log(error);
            });
          break;

          case FETCH_RECIPES_SECTION3:
            axios
              .get(`${baseUrl}complexSearch?query=${nameSection3}&apiKey=${APIkey}`)
              .then((response) => {
                console.log(response.data.results);
                store.dispatch(saveRecipes(response.data.results));
              })
              .catch((error) => {
                console.log(error);
              });
            break;

      default:
    }
  
    // on passe l'action au suivant (middleware suivant ou reducer)
    next(action);
  };
  
  export default recipesMiddleware;