const getUserNames = (users) => {
    let dizi = [];
    for(const user of users) {
        dizi.push(user.name);
    }
    console.log(dizi);
  return users.map((user) => user.name);
};
