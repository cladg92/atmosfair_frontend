export const extractAirports = (list) => {
  var extractAirports = list.map((item) => item.name);
  // remove duplicates
  var airports = [...new Set(extractAirports)];
  return airports;
};
