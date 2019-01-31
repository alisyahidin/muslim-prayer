import moment from 'moment'

export const betweenHours = (x, y) => {
  return moment().isBetween(moment(x, 'HH:mm'), moment(y, 'HH:mm'))
}