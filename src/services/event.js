class EventEmitter {
  constructor () {
    this.events = {
      'authorization-error': [],
      'change-language': [],
      'phone-confirm-error': [],
      'token-auth-state': [],
      'change-api-version': [],
      'internal-server-error': []
    };
  }
  emit ( eventName , data ) {
    const event = this.events[eventName];
    if (event) event.forEach( fn => fn.call( null , data ) );
  }
  subscribe ( eventName , fn ) {
    if ( !this.events[eventName] ) this.events[eventName] = [];
    this.events[eventName].push(fn);
    return () => this.events[eventName] = this.events[eventName].filter( eventFn => fn !== eventFn );
  }
}

const EventService = new EventEmitter();

export default EventService;
