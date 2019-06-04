class date {
  static format(dateObject, format) {
    let value = format

    value = value.replace(/yyyy/, dateObject.getFullYear())
    value = value.replace(/MM/, date.fill(dateObject.getMonth() + 1, 2))
    value = value.replace(/dd/, date.fill(dateObject.getDate(), 2))
    value = value.replace(/hh/, date.fill(dateObject.getHours(), 2))
    value = value.replace(/mm/, date.fill(dateObject.getMinutes(), 2))

    return value
  }

  static fill(number, digit) {
    return `0000${number}`.slice(-1 * digit)
  }
}

export default date
