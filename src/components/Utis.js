Import React from 'react';

function get(object, path, defaultValue) {
    return path.split('.').reduce(
      (parent, name) => parent && 'object' === typeof parent
        ? parent[name]
        : undefined,
      object
    ) || defaultValue;
  }

  export default Funkcja;