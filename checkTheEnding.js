/* checkTheEnding - funktsioon võtab sisse kaks stringi ning kontrollib, kas esimene string lõppeb teise stringiga
andes sisendiks stringid ‘welcome’ ja ‘ome’ peaks funktsioon tagastama väärtuse true
andes sisendiks stringid “welcome ja “end” peaks funktsioon tagastama väärtuse false
kumbki string ei tohi olla tühi, vastasel juhul tagastab funktsioon stringi ‘both strings are required” */
let str1 = "";
let str2 = "";

const Lopp = (str1, str2) => {
  if (str1 == "" || str2 == "") {
    return "both strings are required";
  }
  if ((str1 = str1.endsWith(str2))) {
    return true;
  } else {
    return false;
  }
};

module.exports = Lopp;
