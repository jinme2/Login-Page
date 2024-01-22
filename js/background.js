const imageList =["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = imageList[Math.floor(Math.random()*imageList.length)];

const bgImage = document.createElement("img"); //html tagElement 생성
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body를 불러온 적이 없기 때문에 document에서 불러옴
//appendChild()는 가장 뒤에, prepend()는 가장 위에 오게 함