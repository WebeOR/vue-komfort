const immutable = obj => (
  Object.freeze(obj), ( (void 0 === obj) ? obj : (
    Object.getOwnPropertyNames(obj)
      .forEach( prop =>
        (!Object.isFrozen(obj[prop]) &&
          (
            typeof obj[prop] == 'object' ||
            typeof obj[prop] == 'function'
          )
        ) &&
        immutable(obj[prop])
      ),
    obj
  )
  )
);

export { immutable };
