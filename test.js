const http = require("http");
const fs = require("fs");

async function main() {
  for (let index = 81; index < 91; index++) {
    console.log(`Starting request ... ${index}`);
    const response = await makeRequest(1000, index);
    const responseObj = JSON.parse(response).data;
    if (response.length == 0) continue;
    const csv = responseObj
      .map(
        (row) =>
          `${row._id},  ${row.firstName}, ${row.lastName}, ${row.location}, ${row.lastUsedTime}, ${row.createdTime}, ${row.fSource}, ${row.aSource}, ${row.matchCreator}, ${row.tournamentCreator}, ${row.matchViewer}, ${row.scorer}, ${row.streamer}, ${row.player}`
      )
      .join("\n");
    await fs.appendFileSync("data.csv", csv + "\n");
    console.log(`Request completed ... ${index}`);
  }
}

main();

function makeRequest(limit, page) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: `/api/data/users?limit=${limit}&page=${page}`,
      method: "GET",
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (d) => {
        data += d;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}
