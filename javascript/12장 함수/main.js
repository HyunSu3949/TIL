const grand = {
  hair: "탈모",
};

const father = {
  얼굴: "잘생김",
};

const son = {
  이름: "철수",
  키: "180cm",
};

father.__proto__ = grand;
son.__proto__ = father;

console.log(son.hair);
console.log(son.얼굴);
