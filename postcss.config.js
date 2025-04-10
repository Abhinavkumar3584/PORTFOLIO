module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        // Explicitly disable features that might use the problematic plugin
        'ic-unit': false
      }
    }
  }
};