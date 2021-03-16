const limit = 3000000;
const app = document.querySelector('#app');
let fizu = 100000;
let levonasok = 50000;
let teljesFizuHonap = 12.0;
let teljesFizu = fizu;
let buntiFizuHonap = 0.0;
let buntiFizu = 0;
let atlagFizu = teljesFizu;

init();
document.querySelector('#bevetel').onkeyup = function () {
  fizu = this.value;
  setFizu(fizu, levonasok);
  updateTableData();
};

document.querySelector('#levonasok').onkeyup = function () {
  levonasok = this.value;
  setFizu(fizu, levonasok);
  updateTableData();
};

function setFizu(fizu, levonas) {
  teljesFizuHonap = limit / fizu > 12 ? teljesFizuHonap : limit / fizu;
  console.log(teljesFizuHonap);
  buntiFizuHonap = 12 - teljesFizuHonap;
  teljesFizu = fizu - levonas;
  atlagFizu = teljesFizu;
  if (fizu > limit / 12) {
    const bunti = (12 * fizu - limit) * 0.7142;
    buntiFizu = (bunti / buntiFizuHonap).toFixed(0) - levonas;
    atlagFizu = (limit + bunti) / 12 - levonas;
  }
}

function updateTableData() {
  document.querySelector('#teljes-fizetes').innerText = teljesFizu;
  document.querySelector('#teljes-honap').innerText = teljesFizuHonap.toFixed(
    1
  );
  document.querySelector('#bunti-fizetes').innerText = buntiFizu;
  document.querySelector('#bunti-honap').innerText = buntiFizuHonap.toFixed(1);
  document.querySelector('#atlag-fizetes').innerText = atlagFizu;
}

function init() {
  document.querySelector('#bevetel').value = fizu;
  document.querySelector('#levonasok').value = levonasok;
  updateTableData();
}
