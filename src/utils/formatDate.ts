import moment from "moment";

export const formatDate = (
  date: Date | string,
  format: string = "DD-MM-YYYY"
) => {
  return moment(date).format(format);
};
