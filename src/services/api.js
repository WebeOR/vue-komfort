import axios from 'axios';

import AuthorizationService from './authorization.js';
import EnvironmentService from './environment.js';
import EventService from './event.js';

const agent = axios.create({
  baseURL: `${ EnvironmentService.CurrentAPI }/api/`
});

agent.interceptors.request.use( config => {
  const headers = AuthorizationService.getHeaders();
  if ( headers ) {
    config.headers = {
      'access-token': headers['access-token'],
      'token-Type': headers['token-type'],
      'client': headers.client,
      'expiry': headers.expiry,
      'uid': headers.uid
    };
  }
  return config;
}, error => {
  console.error( 'REQUEST error -' , error );
  return Promise.reject(error);
});

agent.interceptors.response.use( response => {
  return response;
}, error => {
  if ( error.response.status === 401 ) {
    EventService.emit('authorization-error');
  }
  if ( error.status === 500 || error.message === 'Network Error' ) {
    EventService.emit('internal-server-error');
  }
  console.error( 'RESPONSE error -' , error.response );
  return Promise.reject(error.response);
});

const get = ( url , config ) => agent.get( url , config );
const remove = ( url , config ) => agent.delete( url , config );
const post = ( url , payload , config ) => agent.post( url , payload , config );
const put = ( url , payload , config ) => agent.put( url , payload , config );
const patch = ( url , payload , config ) => agent.patch( url , payload , config );

export default { get , remove , post , put , patch };
