import { stringMatch } from "./utilityFunctions";

const dbName = "localDB";
export const pushItem = (newItem) => {
  let allData = JSON.parse(localStorage.getItem(dbName)) || [];
  allData = [...allData, newItem];
  localStorage.setItem("localDB", JSON.stringify(allData));
};
export const getItems = (matchByStatusValue = "all") => {
  let allData = JSON.parse(localStorage.getItem(dbName)) || [];

  // return match by status values or all values according to parameter pass
  return allData.filter(
    (items) =>
      stringMatch(items.status, matchByStatusValue) ||
      stringMatch("all", matchByStatusValue)
  );
};
