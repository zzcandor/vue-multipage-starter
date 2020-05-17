import fil from './fil'
const install = function (Vue, opts = {}) {
  fil.forEach(f => {
    Vue.filter(f.name, f.fil)
  })
}
export default install
