

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d67e9a07-3c63-4ed4-abe4-80a644c0cde9","f43b69ae-fcb2-4619-bb07-110a10cf2b30","a2e7eba7-ba9d-4a18-91b6-5fcecc512f83","7a1545e4-aa25-4374-97b4-d480f7903af8"],"propsByKey":{"d67e9a07-3c63-4ed4-abe4-80a644c0cde9":{"name":"p1","sourceUrl":null,"frameSize":{"x":398,"y":395},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZeyywMWjUUZn_thz9lxyyEvID3t8xTSZ","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":395},"rootRelativePath":"assets/d67e9a07-3c63-4ed4-abe4-80a644c0cde9.png"},"f43b69ae-fcb2-4619-bb07-110a10cf2b30":{"name":"green","sourceUrl":null,"frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZFT7_FBZSduR1LcH0_S5Q47s_K6_Cs5O","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/f43b69ae-fcb2-4619-bb07-110a10cf2b30.png"},"a2e7eba7-ba9d-4a18-91b6-5fcecc512f83":{"name":"back","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":60,"version":"jV0BVGycU3uYtYS7JA9.DGSSC7IKtO3R","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/a2e7eba7-ba9d-4a18-91b6-5fcecc512f83.png"},"7a1545e4-aa25-4374-97b4-d480f7903af8":{"name":"a1","sourceUrl":null,"frameSize":{"x":345,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"DbKniJw4_k6I..amJVWlohqCZhnJx5zK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":345,"y":398},"rootRelativePath":"assets/7a1545e4-aa25-4374-97b4-d480f7903af8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backg = createSprite(200,200, 200,200)
var paletaJugador = createSprite(365, 200, 10, 70);
var paletaCompu = createSprite(35, 200, 10, 70);
var ball = createSprite(200,200,10,10);

backg.setAnimation("back");
paletaJugador.setAnimation("a1");
paletaJugador.scale = 0.19;
paletaCompu.setAnimation("p1");
paletaCompu.scale = 0.17;
ball.setAnimation("green");
ball.scale = 0.13;

function draw() {
  if((ball.isTouching(paletaJugador))||(ball.isTouching(paletaCompu))){
    playSound("assets/category_tap/vibrant_positive_tap_4.mp3", false);
  }
  
  {
  if(keyDown("up")){
    paletaJugador.y = paletaJugador.y - 10;
  }
  
  if(keyDown("down")){
    paletaJugador.y = paletaJugador.y  + 10;
  }
  }
  
  paletaCompu.y = ball.y;
  
  {
    createEdgeSprites();
    paletaJugador.bounceOff(topEdge);
    paletaJugador.bounceOff(bottomEdge);
    paletaCompu.bounceOff(topEdge);
    paletaCompu.bounceOff(bottomEdge);
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);
    ball.bounceOff(paletaJugador);
    ball.bounceOff(paletaCompu);
  }
  drawSprites();
  
  if(ball.x > 400 || ball.x < 0){
    reset();
  }
  
  if(keyDown("space")){
    ball.velocityY = 5;
    ball.velocityX = 3;
  }
}

function reset(){
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
