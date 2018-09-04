import EnvironmentService from './environment.js';

const logoutDestination = () => {
  return EnvironmentService.isProduction ? '/login' : '/login';
};

class Authorization {
  authenticate ( headers , remember ) {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('auth', JSON.stringify(headers));
  }
  invalidate ( breakPath = true ) {
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
    if (breakPath) window.location.href = logoutDestination();
  }
  loggedIn () {
    return !!localStorage.getItem('auth') || !!sessionStorage.getItem('auth');
  }
  getHeaders () {
    return JSON.parse(localStorage.getItem('auth') || sessionStorage.getItem('auth'));
  }
}

const AuthorizationService = new Authorization();

export default AuthorizationService;
