const { Op } = require('sequelize');
const { Post } = require('@app/models');

const ApiError = require('@app/helpers/api-error');
const utilsHelper = require('@app/helpers/utils');

const getList = async query => {
  const {start, count, filter} = query;
  const {limit, offset} = utilsHelper.getPagination(parseInt(start), parseInt(count));

  const filterQuery = _getFilterQuery(filter);

  const data = await Post.findAndCountAll({
    ...(limit && {limit}),
    ...(offset && {offset}),
    where: filterQuery,
    attributes: Post.fetchAttributes(),
    order: [['id', 'DESC']]
  });

  return utilsHelper.getPagingData(data, limit, start);
};

const getDetail = async id => {
  const post = await _getPost(id);

  return post;
};

const create = async params => {
  const post = await Post.create(params);

  return {code: 200, resp: post};
};

const update = async (id, params) => {
  const post = await _getPost(id);

  await post.update(params);

  return {code: 200, resp: post};
};

const destroy = async id => {
  const post = await _getPost(id);

  await post.destroy();

  return {code: 200, resp: {}};
};

// private

const _getPost = async id => {
  const post = await Post.findOne({
    where: {id},
    attributes: Post.fetchAttributes()
  });

  if (!post) throw new ApiError('Post not found!', 404);

  return post;
};

const _getFilterQuery = filter => {
  let response = {};

  if (filter) {
    const {title} = filter;

    response = {
      ...response,
      ...(title && {title: {[Op.substring]: title}})
    };
  }

  return response;
};

module.exports = {
  getList,
  getDetail,
  create,
  update,
  destroy
};
