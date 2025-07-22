// utils/cors.js
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
export function capitalizeFirstLetter(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function isObjectFilled(obj) {
  if (obj === null || typeof obj !== 'object' || obj === undefined) {
    return false;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (typeof value === 'string' && value.trim() !== '') {
        return true;
      } else if (Array.isArray(value) && value.length > 0) {
        return true;
      } else if (value instanceof File) {
        return true;
      } else if (
        value !== null &&
        value !== undefined &&
        typeof value === 'object'
      ) {
        if (isObjectFilled(value)) {
          return true;
        }
      }
    }
  }
  return false;
}
