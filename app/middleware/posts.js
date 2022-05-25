const { checkInput } = require('@app/helpers/validates');

const params = {
  title: { type: 'string' },
  description: { type: 'string' }
};

const create = (req, res, next) => {
  const permitParams = {
    ...params,
    title: { type: 'string', require: true }
  };

  try {
    req.body = checkInput(req.body, permitParams);

    next();
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
};

const update = (req, res, next) => {
  try {
    req.body = checkInput(req.body, params);

    next();
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
};

module.exports = {
  create,
  update
};
