import watermark from './watermark'

export default {
  install (Vue, config = {}) {
    Vue.directive('watermark', (el, binding) => {
      let options

      if (typeof binding.value === 'string') {
        options = {
          content: binding.value
        }
      } else {
        options = binding.value
      }

      watermark(Object.assign({ container: el }, config, options))
    })
  }
}
