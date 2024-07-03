// // Skip Husky install in production and CI
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   console.log('if runs');
// } else {
//   console.log('else run  11');
// }
// if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
//   process.exit(0);
// }
// const husky = (await import('husky')).default;
// console.log(husky());
