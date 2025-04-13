import { FindOptions } from "@sequelize/core";
export const parseStringToBoolean = (string: string | undefined) => {
  if (typeof string === "string") {
    return string === "true";
  }

  return string;
};

export const parseStringToNumber = (string: string | undefined) => {
  if (typeof string === "string") {
    const number = Number(string);
    if (!isNaN(number)) {
      return number;
    }
  }
  return string;
};

export const parseBooleanQuery = (
  baseFindObject: FindOptions,
  booleanQueries,
) => {
  const booleanKeys = Object.keys(booleanQueries);

  for (const key of booleanKeys) {
    const value = parseStringToBoolean(booleanQueries[key]);
    if (typeof value === "boolean") {
      baseFindObject.where = {
        ...baseFindObject.where,
        [key]: value,
      };
    }
  }

  return baseFindObject;
};
