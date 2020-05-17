import moment from 'moment'
export default [
  {
    name: 'level',
    fil: (value) => {
      value = parseInt(value)
      if (value >= 0 && value <= 199) {
        return '青铜'
      } else  {
        return '---'
      }
    }
  }
]

