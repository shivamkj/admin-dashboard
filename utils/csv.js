const data = [];

const csvData = data.map(
  (obj) =>
    `${obj._id}, ${obj?.foo}, ${obj.user?.city.replaceAll(",", "-")}, ${obj.user?.profileImage}`
);

console.log(users.join(" \n "));
