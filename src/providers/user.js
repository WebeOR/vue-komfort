import API from '../services/api.js';

const loadAccount = async () => {
  try {
    const response = await API.get('/account');
    console.log( 'User/loadAccount - ' , response );
    if ( response.status === 200 ) return data.account;
  } catch (errors) {
    console.error( 'User/loadAccount - ' , errors );
    throw errors;
  }
} 

export default { loadAccount };