const checkInput = (body, permitParams) => {
  const response = {};

  for (const key in permitParams) {
    if (permitParams.hasOwnProperty(key)) {
      // check require
      if (permitParams[key].require) {
        if (!body[key] && body[key] !== false && body[key] !== 0) throw new Error(`Missing ${key}`);
      }

      // check type
      if (body[key] || body[key] === false || body[key] === 0) {
        switch (permitParams[key].type) {
          case 'array':
            if (!Array.isArray(body[key])) throw new Error(`${key} must be an array`);
            break;
          case 'enum':
            if (!permitParams[key].values.includes(body[key])) throw new Error(`${key} invalid value`);
            break;
          default:
            if (typeof body[key] !== permitParams[key].type) throw new Error(`${key} must be a ${permitParams[key].type}`);
        }

        response[key] = body[key];
      }
    }
  }

  return response;
};

module.exports = {
  checkInput
};
