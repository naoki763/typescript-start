// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // ✅ Tailwind v4 対応の新形式
    require('autoprefixer'),
  ],
};
