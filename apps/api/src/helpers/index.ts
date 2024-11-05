export const getBooleanFromString = (string) => {
  if (typeof string === "string") {
    return string === "true";
  }

  return string;
};

export const buildQueryParams = (queryParamsObject) => {
  const query = {};
  const keys = Object.keys(queryParamsObject);

  if (keys.length > 0) {
    keys.map((key) => {
      const param = queryParamsObject[key];
      if (param != null) query[key] = queryParamsObject[key];
    });
    return query;
  }
  return query;
};
