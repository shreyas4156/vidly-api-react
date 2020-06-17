const _ = require("lodash");
export const paginate = (items, pageNumber, pageSize) => {
  const index = (pageNumber - 1) * pageSize;
  const array = _(items).slice(index).take(pageSize).value();
  if (array.length === 0)
    return _(items)
      .slice(index)
      .take(pageSize - 1)
      .value();
  return array;
};
