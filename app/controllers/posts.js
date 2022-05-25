const postServices = require('@app/services/posts');

const index = async (req, res) => {
  try {
    const data = await postServices.getList(req.query);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(error.code || 422).send({ error: error.message });
  }
};

const detail = async (req, res) => {
  try {
    const data = await postServices.getDetail(req.params.id);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(error.code || 422).send({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { resp, code } = await postServices.create(req.body, req.admin);

    return res.status(code).send(resp);
  } catch (error) {
    return res.status(error.statusCode || 422).send({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { resp, code } = await postServices.update(req.params.id, req.body);

    return res.status(code).send(resp);
  } catch (error) {
    return res.status(error.statusCode || 422).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { resp, code } = await postServices.destroy(req.params.id);

    return res.status(code).send(resp);
  } catch (error) {
    return res.status(error.statusCode || 422).send({ error: error.message });
  }
};

module.exports = {
  index,
  detail,
  create,
  update,
  destroy
};
