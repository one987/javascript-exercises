const ftoc = function(far) {
  let fTemp= far;
  let fToCel = (fTemp - 32) * 5/9;
  let tempCel = Math.round(fToCel * 10) / 10;
  return tempCel;
};

const ctof = function(cel) {
  let cTemp = cel;
  let cToFahr = cTemp * 9 / 5 + 32;
  let tempFahr = Math.round(cToFahr * 10) / 10;
  return tempFahr;
};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
