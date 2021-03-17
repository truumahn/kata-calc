const limit = 3000000;
const app = document.querySelector('#app');
let fizu = 100000;
let levonasok = 50000;
let teljesFizuHonap = 12.0;
let teljesFizu = fizu;
let buntiFizuHonap = 0.0;
let buntiFizu = 0;
let atlagFizu = teljesFizu;

const bevetelInput = document.querySelector('#bevetel');
const updateBevetel = function () {
  fizu = this.value;
  updateTableData();
};
bevetelInput.addEventListener('keyup', updateBevetel);
bevetelInput.addEventListener('change', updateBevetel);

const levonasokInput = document.querySelector('#levonasok');
const updateLevonasok = function () {
  levonasok = this.value;
  updateTableData();
};
levonasokInput.addEventListener('keyup', updateLevonasok);
levonasokInput.addEventListener('change', updateLevonasok);

function updateFizu() {
  teljesFizuHonap = limit / fizu > 12 ? teljesFizuHonap : limit / fizu;
  buntiFizuHonap = 12 - teljesFizuHonap;
  teljesFizu = fizu - levonasok;
  atlagFizu = teljesFizu;
  if (fizu > limit / 12) {
    let limitFelettiFizu = 12 * fizu - limit;
    const bunti = limitFelettiFizu * 0.28568;
    limitFelettiFizu = limitFelettiFizu - bunti;
    buntiFizu = (limitFelettiFizu / buntiFizuHonap).toFixed(0) - levonasok;
    atlagFizu = ((limit + limitFelettiFizu) / 12).toFixed(0) - levonasok;
  }
}

function updateTableData() {
  updateFizu();
  document.querySelector('#teljes-fizetes').innerText = teljesFizu;
  document.querySelector('#teljes-honap').innerText = teljesFizuHonap.toFixed(
    1
  );
  document.querySelector('#bunti-fizetes').innerText = buntiFizu;
  document.querySelector('#bunti-honap').innerText = buntiFizuHonap.toFixed(1);
  document.querySelector('#atlag-fizetes').innerText = atlagFizu;
}

function init() {
  bevetelInput.value = fizu;
  levonasokInput.value = levonasok;
  updateTableData();
}

init();
