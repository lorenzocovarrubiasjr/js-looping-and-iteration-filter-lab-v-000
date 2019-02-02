// Code your solution in this file
function findMatching(drivers, string) {
  const matchingStrings = drivers.filter(function (s) {
     return s == string})

  return matchingStrings;
}
