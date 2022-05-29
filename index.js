// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : 'naufal al fikri',
    gender : 'male',
    age : 23,
    email : 'naufalalfikri@gmail.com',
    favoriteColor : new Set('blue','black','white'),
    isHavePet : 'No',
    education : [['name: SDN GS 3','city: Surabaya','graduate: 2010'],['name: SMPN 21','city: Surabaya','graduate: 2013'],['name: SMAN 18','city: Surabaya','graduate: 2016']],
    favoriteRestaurant : new Set('Udon','Sashimi','Nasi Goreng','Pangsit','Bakso','Sushi','Ramen')
};
const secondUser = { 
name : 'zhacken',
gender : 'male',
age : 24,
email : 'zhacken31@gmail.com',
favoriteColor : new Set('green','black','yellow'),
isHavePet : 'No',
education : [['name: SDN GS 3','city: Surabaya','graduate: 2010'],['name: SMPN 21','city: Surabaya','graduate: 2013'],['name: SMAN 18','city: Surabaya','graduate: 2016']],
favoriteRestaurant : new Set('Udon','Sashimi','Nasi Goreng','Pangsit','Bakso','Sushi','Ramen')
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};