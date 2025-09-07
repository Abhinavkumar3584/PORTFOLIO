export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'ic-unit': false, // Explicitly disable the IC unit feature
        'custom-properties': false, // Disable potentially problematic features
        'nesting-rules': false // Disable potentially problematic features
      }
    }
  }
};