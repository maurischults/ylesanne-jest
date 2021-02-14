/*getUsernameByID: funktsioon teeb päringu JSONPlaceholder’i users andmebaasi ning tagastab kasutaja poolt etteantud ID’ga kasutaja nime
kui anda sisendiks ID 3, siis peaks funktsioon tagastama nime “Clementine Bauch”
kui funktsioonile ei anta input’i, siis peaks funktsioon tagastama stringi ‘error’
_________________
NB! getUsernameByID funktsioon kasutab axios’t ning tegemist on asünkroonse funktsiooniga, mida tuleb teste kirjutades silmas pidada.
NBB! Selleks, et kasutada ID’d axiose get meetodi sees, saad kasutada string interpolation’it.
 */
const axios = require("axios");
const fetchID = (id) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      return res.data.name;
    })
    .catch((err) => "error");
module.exports = fetchID;
