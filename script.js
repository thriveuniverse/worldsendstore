// Example target dates – update these whenever new predictions drop
const targets = {
  emad: new Date('2027-12-31').getTime(),
  rickards: new Date('2026-12-31').getTime(),
  bonus: new Date('2030-01-01').getTime()
};

function updateClocks() {
  const now = new Date().getTime();
  document.getElementById('emad').querySelector('span').textContent = Math.floor((targets.emad - now) / 86400000);
  document.getElementById('rickards').querySelector('span').textContent = Math.floor((targets.rickards - now) / 86400000);
  document.getElementById('bonus').querySelector('span').textContent = Math.floor((targets.bonus - now) / 86400000);
}
updateClocks();
setInterval(updateClocks, 86400000); // update daily