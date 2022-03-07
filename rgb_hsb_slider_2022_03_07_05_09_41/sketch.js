let rSlider, gSlider, bSlider, e, c, c1, checkbox, textC;

function setup() {
  // 캔버스 생성하기
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  // 슬라이더 생성하기
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

  //스위치 초기값
  e = 0;
  checkbox = createCheckbox("switch to hsb", false);
  checkbox.changed(myCheckedEvent);
}

function draw() {
  if (e % 2 == 0) {
    rgb();
  } else {
    hsb();
  }
}

function rgb() {
  colorMode(RGB, 255);
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  c = color(r, g, b);
  fill(c);
  rect(0, 0, width, height);
  let t = get(0, 0);
  const hueValue =int (hue(t));
  const saturValue =int(saturation(t));
  const brightValue =int (brightness(t));

  //all the text
  textC = 255 - brightness(c);
  fill(textC);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
  text(":" + " " + r, 250, 35);
  text(":" + " " + g, 250, 65);
  text(":" + " " + b, 250, 95);
  text("hue" + ":" + "           " + hueValue, 400, 35);
  text("saturation" + ":" + " " + saturValue, 400, 65);
  text("brightness" + ":" + " " + brightValue, 400, 95);
}

function hsb() {
  colorMode(HSB, 255);
  const h = rSlider.value();
  const s = gSlider.value();
  const l = bSlider.value();
  c1 = color(h, s, l);
  fill(c1);
  rect(0, 0, width, height);
  let z = get(0, 0);

  const redValue = int(red(z));
  const greenValue =int(green(z));
  const blueValue = int(blue(z));

  textC = 255 - brightness(c);
  fill(textC);
  text("hue", rSlider.x * 2 + rSlider.width, 35);
  text("saturation", gSlider.x * 2 + gSlider.width, 65);
  text("brightness", bSlider.x * 2 + bSlider.width, 95);
  text(":" + " " + h, 250, 35);
  text(":" + " " + s, 250, 65);
  text(":" + " " + l, 250, 95);
  text("red" + ":" + "     " + redValue, 400, 35);
  text("green" + ":" + " " + greenValue, 400, 65);
  text("blue" + ":" + "   " + blueValue, 400, 95);
}

function myCheckedEvent(event) {
  //console.log(event);
  e++;
  console.log(e);
}
