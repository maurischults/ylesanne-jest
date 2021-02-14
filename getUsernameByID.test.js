const { TestScheduler } = require("jest");
const fetchID = require("./getUsernameByID.js");

test("fetched ID's response should be Clementine Bauch", async () => {
  const data = await fetchID(3);
  console.log(data);
  expect(data).toEqual("Clementine Bauch");
});
test("fetched ID's response should be error", async () => {
  const data = await fetchID();
  console.log(data);
  expect(data).toEqual("error");
});
