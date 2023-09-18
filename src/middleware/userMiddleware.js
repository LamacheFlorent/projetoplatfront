import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_REGISTER, handleErrorConnexion, handleSuccessfulLogin, handleSuccessfulRegister, handleErrorRegister } from '../actions/user';
import { fetchFavoriteRecipes } from '../actions/recipes';

const baseUrl = 'http://lamacheflorent-server.eddi.cloud/projet-7-generateur-plats-recettes-back/public/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(`${baseUrl}/login_check`,
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        }
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(handleSuccessfulLogin(response.data.data.nickname, response.data.data.email, response.data.token));
          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleErrorConnexion(true));
        });
      break;

    case SUBMIT_REGISTER:
      if (store.getState().user.password === store.getState().user.confirm_password) {
        store.dispatch(handleErrorRegister(false));
        axios.post(`${baseUrl}/users/register`,
          {
            email: store.getState().user.email,
            password: store.getState().user.password,
            nickname: store.getState().user.nickname,
          }
        )
          .then((response) => {
            console.log('Inscription réussie', response.data);
            store.dispatch(handleSuccessfulRegister());
          })
          .catch((error) => {
            console.log(error)
          });
      } else {
        store.dispatch(handleErrorRegister(true));
      }
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;