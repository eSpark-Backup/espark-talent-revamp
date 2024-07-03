if (process.env.NODE_ENV !== 'production') {
  const { execSync } = require('child_process');
  execSync('husky install', { stdio: 'inherit' });
  // eslint-disable-next-line prettier/prettier
} else {
  console.log('Skipping husky install in production environment');
  // eslint-disable-next-line prettier/prettier
}
