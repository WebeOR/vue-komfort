import API from '../../services/api.js';
import AuthorizationService from '../../services/authorization.js';

const state = {
  'access-token': null, // "cvRdOSf_yo4K56t86NZrlw"
  'account': null, // "bc6340c2-57c6-4f49-a939-96fe06a6344f"
  'client': null, // "a0kgMB2qPwmHAeoIcKEbaw"
  'expiry': null, // "1522923541"
  'id': null, // "47b90d08-7fc6-48ad-9b50-b127932a8d66"
  'owner': null, // true <- указывает, админ или нет
  'token-type': null, // "Bearer"
  'uid': null, // "alexquidditch@yandex.ru"
  'role': 'corp'
};

const actions = {
  checkSession ({ commit }) {
    const isLoggedIn = AuthorizationService.loggedIn();
    if (isLoggedIn) {
      const authState = AuthorizationService.getHeaders();
      commit( 'SET_AUTH_STATE' , { data: authState, remember: false });
    }
  },
  createUser ({ commit } , formData ) {
    return API.post( '/users' , { formData })
      .then( response => {
        console.log( 'Auth/createUser -' , response );
        if ( response && response.status === 201 ) {
          commit('SET_AUTH_STATE', { data: response.data , remember: formData.remember });
          return response.data;
        }
      })
      .catch( error => {
        console.error( 'Auth/createUser -' , error.response );
        return Promise.reject(error.data.errors);
      });
  },
  onMailAuth ({ commit } , AuthData ) {
    return API.post( '/users/sign_in' , { AuthData })
      .then( response => {
        console.log( 'Auth/onMailAuth -' , response );
        if ( response.status && response.status === 200 ) {
          commit( 'SET_AUTH_STATE' , { data: response.data , remember: AuthData.remember });
        }
        return response;
      })
      .catch( error => {
        console.error( 'Auth/onMailAuth -' , error );
        return Promise.reject(error.data.errors);
      });
  },
  saveNewPassword ({ commit } , newPasswordData ) {
    return API.put( '/users/password' , { newPasswordData })
      .then( response => {
        console.log( 'Auth/saveNewPassword -' , response );
        if ( response.status && response.status === 200 ) {
          commit( 'SET_AUTH_STATE' , { data: response.data , remember: false });
        }
        return response;
      })
      .catch( error => {
        console.error( 'Auth/saveNewPassword -' , error.response );
        return Promise.reject(error.response);
      });
  },
  passwordRecovery ( context , recoveryData ) {
    return API.post( '/users/password' , { recoveryData } )
      .then( response => {
        console.log( 'Auth/PasswordRecovery -' , response );
        return response.data;
      })
      .catch( error => {
        console.error( 'Auth/PasswordRecovery -' , error.response );
        return Promise.reject(error.data.errors);
      });
  },
  atLogoutAction ({ commit }) {
    commit('AT_LOGOUT_ACTION');
  }
};

const mutations = {
  SET_AUTH_STATE ( state , { data , remember }) {
    AuthorizationService.authenticate( data , remember );
    state = Object.assign( state , data );
  },
  AT_LOGOUT_ACTION (state) {
    AuthorizationService.invalidate();
    for ( const key in state ) {
      state[key] = null;
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
