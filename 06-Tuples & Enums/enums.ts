enum Days {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

const isWeekend = (day: Days): boolean => {
  let isWeekend = false
  switch (day) {
    case Days.Sat:
    case Days.Sun:
      isWeekend = true
      break
    default:
      isWeekend = false
      break
  }
  return isWeekend
}
console.log(isWeekend(Days.Sat))
console.log(Days['Mon'])
console.log(Days[0])
