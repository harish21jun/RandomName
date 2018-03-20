exports.getRandomName = function(req, res) {
  var myArray = [
    "Tukeshwar Bhardwaj",
    "Venkata Thindi",
    "Sreelatha Allampati",
    "Harish Dewangan",
    "Prasada Karantha",
    "Ramesh Koda",
    "Randel Gojo Cruz",


    "Venkata Thindi",
    "Prasada Karantha",
    "Sreelatha Allampati",
    "Tukeshwar Bhardwaj",
    "Harish Dewangan",
    "Ramesh Koda",
    "Randel Gojo Cruz",

    "Prasada Karantha",
    "Ramesh Koda",
    "Randel Gojo Cruz",
    "Venkata Thindi",
    "Harish Dewangan",
    "Sreelatha Allampati",
    "Tukeshwar Bhardwaj"
  ];

  var randomName = myArray[Math.floor(Math.random()*myArray.length)];
  console.log('RandomName:'+randomName);

  res.render('index',{
			page : 'home',
			randomName: randomName,
      title: 'Are you the lucky one ?',
  		errors: []
	});
};
