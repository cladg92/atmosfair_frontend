// Extract list of airports names from data
export const extractAirports = (list) => {
  let extractAirports = list.map((item) => item.name);
  // remove duplicates
  let airports = [...new Set(extractAirports)];
  return airports;
};
