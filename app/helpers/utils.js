const getPagination = (start, count) => {
  if ((!start && start !== 0) || (!count && count !== 0)) {
    return {limit: 20, offset: 0};
  }

  const limit = count || 20;
  const offset = start || 0;

  return { limit, offset };
};

const getPagingData = (data, limit, start) => {
  const { count, rows } = data;

  return { total: count, start: parseInt(start) || 0, ...(limit && {count: limit}), data: rows };
};

const round = number => {
  return (Math.round(number * 100) / 100);
};

module.exports = {
  getPagination,
  getPagingData,
  round
};
