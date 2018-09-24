module.exports = ({ env }) => ({
  plugins: {
    'autoprefixer': env === 'production' ? {} : false,
    'css-mqpacker': env === 'production' ? {} : false
  }
});
