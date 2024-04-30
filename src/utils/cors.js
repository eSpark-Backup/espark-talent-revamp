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