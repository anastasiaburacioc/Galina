

//function hello() {
 // alert('Привет! Пожалуйста, включи звук кликом или нажатием на экран! :)')
//}
function decorP(num) {
  const target = window.document.getElementsByTagName("p")[num];

  const flickerLetter = (letter) =>
    `<span style="animation: text-flicker-in-glow ${
      Math.random() * 4
    }s linear both ">${letter}</span>`;
  const colorLetter = (letter) =>
    `<span style="color: hsla(${
      Math.random() * 20
    }, 30%, 95%, 1);">${letter}</span>`;
  const flickerAndColorText = (text) =>
    text.split("").map(flickerLetter).map(colorLetter).join("");
  const neonGlory = (target) =>
    (target.innerHTML = flickerAndColorText(target.textContent));

  neonGlory(target);
  target.onload = ({ target }) => neonGlory(target);
}

/*var colors = [
  "#F88431",
  "#F6BA35",
  "#EDD43A",
  "#89DC28",
  "#FF3399",
  " 	#FF0066",
]; // you can add your own colors
var col_length = colors.length;
var number_of_circles = 400; // you can change number of circles;
var i = 0;
function create_random_line() {
  $(".main").append('<div class = "circle"></div>');
  if (i < number_of_circles - 1) {
    setTimeout(function () {
      var getRandomPosX = Math.random() * 1330;
      var getRandomPosY = Math.random() * 1300;
      var getRandomColor = Math.floor(Math.random() * col_length);
      var getRandomScale = Math.random() * (1.8 - 0.5) + 0.5;
      var getRandomOpacity = Math.random() * (1 - 0.3) + 0.3;
      var getRandomZIndex = Math.floor(Math.random() * 10);
      console.log(getRandomZIndex);
      $(".circle")
        .eq(i)
        .css({
          left: getRandomPosX,
          top: getRandomPosY,
          transform: "scale(" + getRandomScale + ")",
          background: colors[getRandomColor],
          opacity: getRandomOpacity,
          "z-index": getRandomZIndex,
        });
      create_random_line();
    }, 0.3);
    i++;
  }
}
//create_random_line();
*/


function hello() {
  let one = document.getElementById("hello");
  decorP(0);
}

hello();

function none() {
  let hi = document.getElementById("hello");
  hi.setAttribute("class", "displayNone");
}

setTimeout(none, 5000);


function confirmApp() {
  let conf = document.getElementById("confirm");
  conf.setAttribute("class", "confirmBox");
  let text1 = document.getElementById("text1");
  text1.innerHTML = "Vă rog să zâmbiți pentru ca recunoașterea facială";
  let text2 = document.getElementById("text2");
  text2.innerHTML = "să identifice destinătarul mesajului";
  let text3 = document.getElementById("text3");
  text3.innerHTML = "și apăsați butonul verde pentru a continua!";
  let btnConf = document.getElementById("btnConf");
  btnConf.setAttribute("class", "btn");
}

setTimeout(confirmApp, 5000);




function On(){

  alert('hhhhhhhhhh');

/*function music() {
 let video = document.getElementById("audio");
video.play();

}
music();

function fw() {
  var gl = c.getContext("webgl", {
      preserveDrawingBuffer: true,
    }),
    w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    webgl = {},
    opts = {
      projectileAlpha: 3,
      projectileLineWidth: 1.3,
      fireworkAngleSpan: 0.5,
      baseFireworkVel: 3,
      addedFireworkVel: 3,
      gravity: 0.02,
      lowVelBoundary: -0.2,
      xFriction: 0.995,
      baseShardVel: 1,
      addedShardVel: 0.01,
      fireworks: 100,
      baseShardsParFirework: 10,
      addedShardsParFirework: 10,
      shardFireworkVelMultiplier: 0.3,
      initHueMultiplier: 1 / 360,
      runHueAdder: 0.1 / 360,
    };
  webgl.vertexShaderSource = `
uniform int u_mode;
uniform vec2 u_res;
attribute vec4 a_data;
varying vec4 v_color;

vec3 h2rgb( float h ){
	return clamp( abs( mod( h * 6. + vec3( 0, 4, 2 ), 6. ) - 3. ) -1., 0., 1. );
}
void clear(){
	gl_Position = vec4( a_data.xy, 0, 1 );
	v_color = vec4( 0, 0, 0, a_data.w );
}
void draw(){
	gl_Position = vec4( vec2( 1, -1 ) * ( ( a_data.xy / u_res ) * 2. - 1. ), 0, 1 );
	v_color = vec4( h2rgb( a_data.z ), a_data.w );
}
void main(){
	if( u_mode == 0 )
		draw();
	else
		clear();
}
`;
  webgl.fragmentShaderSource = `
precision mediump float;
varying vec4 v_color;

void main(){
	gl_FragColor = v_color;
}
`;
  webgl.vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(webgl.vertexShader, webgl.vertexShaderSource);
  gl.compileShader(webgl.vertexShader);
  webgl.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(webgl.fragmentShader, webgl.fragmentShaderSource);
  gl.compileShader(webgl.fragmentShader);
  webgl.shaderProgram = gl.createProgram();
  gl.attachShader(webgl.shaderProgram, webgl.vertexShader);
  gl.attachShader(webgl.shaderProgram, webgl.fragmentShader);
  gl.linkProgram(webgl.shaderProgram);
  gl.useProgram(webgl.shaderProgram);
  webgl.dataAttribLoc = gl.getAttribLocation(webgl.shaderProgram, "a_data");
  webgl.dataBuffer = gl.createBuffer();
  gl.enableVertexAttribArray(webgl.dataAttribLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, webgl.dataBuffer);
  gl.vertexAttribPointer(webgl.dataAttribLoc, 4, gl.FLOAT, false, 0, 0);
  webgl.resUniformLoc = gl.getUniformLocation(webgl.shaderProgram, "u_res");
  webgl.modeUniformLoc = gl.getUniformLocation(webgl.shaderProgram, "u_mode");
  gl.viewport(0, 0, w, h);
  gl.uniform2f(webgl.resUniformLoc, w, h);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.BLEND);
  gl.lineWidth(opts.projectileLineWidth);
  webgl.data = [];
  webgl.clear = function () {
    gl.uniform1i(webgl.modeUniformLoc, 1);
    var a = 0.1;
    webgl.data = [
      -1,
      -1,
      0,
      a,
      1,
      -1,
      0,
      a,
      -1,
      1,
      0,
      a,
      -1,
      1,
      0,
      a,
      1,
      -1,
      0,
      a,
      1,
      1,
      0,
      a,
    ];
    webgl.draw(gl.TRIANGLES);
    gl.uniform1i(webgl.modeUniformLoc, 0);
    webgl.data.length = 0;
  };
  webgl.draw = function (glType) {
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(webgl.data),
      gl.STATIC_DRAW
    );
    gl.drawArrays(glType, 0, webgl.data.length / 4);
  };
  var fireworks = [],
    tick = 0,
    sins = [],
    coss = [],
    maxShardsParFirework =
      opts.baseShardsParFirework + opts.addedShardsParFirework,
    tau = 6.283185307179586476925286766559;
  for (var i = 0; i < maxShardsParFirework; ++i) {
    sins[i] = Math.sin((tau * i) / maxShardsParFirework);
    coss[i] = Math.cos((tau * i) / maxShardsParFirework);
  }

  function Firework() {
    this.reset();
    this.shards = [];
    for (var i = 0; i < maxShardsParFirework; ++i)
      this.shards.push(new Shard(this));
  }
  Firework.prototype.reset = function () {
    var angle = -Math.PI / 2 + (Math.random() - 0.5) * opts.fireworkAngleSpan,
      vel = opts.baseFireworkVel + opts.addedFireworkVel * Math.random();
    this.mode = 0;
    this.vx = vel * Math.cos(angle);
    this.vy = vel * Math.sin(angle);
    this.x = Math.random() * w;
    this.y = h;
    this.hue = tick * opts.initHueMultiplier;
  };
  Firework.prototype.step = function () {
    if (this.mode === 0) {
      var ph = this.hue,
        px = this.x,
        py = this.y;
      this.hue += opts.runHueAdder;
      this.x += this.vx *= opts.xFriction;
      this.y += this.vy += opts.gravity;
      webgl.data.push(
        px,
        py,
        ph,
        opts.projectileAlpha * 0.2,
        this.x,
        this.y,
        this.hue,
        opts.projectileAlpha * 0.2
      );
      if (this.vy >= opts.lowVelBoundary) {
        this.mode = 1;
        this.shardAmount =
          (opts.baseShardsParFirework +
            opts.addedShardsParFirework * Math.random()) |
          0;
        var baseAngle = Math.random() * tau,
          x = Math.cos(baseAngle),
          y = Math.sin(baseAngle),
          sin = sins[this.shardAmount],
          cos = coss[this.shardAmount];
        for (var i = 0; i < this.shardAmount; ++i) {
          var vel = opts.baseShardVel + opts.addedShardVel * Math.random();
          this.shards[i].reset(x * vel, y * vel);
          var X = x;
          x = x * cos - y * sin;
          y = y * cos + X * sin;
        }
      }
    } else if (this.mode === 1) {
      this.ph = this.hue;
      this.hue += opts.runHueAdder;
      var allDead = true;
      for (var i = 0; i < this.shardAmount; ++i) {
        var shard = this.shards[i];
        if (!shard.dead) {
          shard.step();
          allDead = false;
        }
      }
      if (allDead) this.reset();
    }
  };

  function Shard(parent) {
    this.parent = parent;
  }
  Shard.prototype.reset = function (vx, vy) {
    this.x = this.parent.x;
    this.y = this.parent.y;
    this.vx = this.parent.vx * opts.shardFireworkVelMultiplier + vx;
    this.vy = this.parent.vy * opts.shardFireworkVelMultiplier + vy;
    this.starty = this.y;
    this.dead = false;
    this.tick = 1;
  };
  Shard.prototype.step = function () {
    this.tick += 0.05;
    var px = this.x,
      py = this.y;
    this.x += this.vx *= opts.xFriction;
    this.y += this.vy += opts.gravity;
    var proportion = 1 - (this.y - this.starty) / (h - this.starty);
    webgl.data.push(
      px,
      py,
      this.parent.ph,
      opts.projectileAlpha / this.tick,
      this.x,
      this.y,
      this.parent.hue,
      opts.projectileAlpha / this.tick
    );
    if (this.y > h) this.dead = true;
  };

  function anim() {
    window.requestAnimationFrame(anim);
    webgl.clear();
    ++tick;
    if (fireworks.length < opts.fireworks) fireworks.push(new Firework());
    fireworks.map(function (firework) {
      firework.step();
    });
    webgl.draw(gl.LINES);
  }
  anim();
  window.addEventListener("resize", function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(webgl.resUniformLoc, w, h);
  });
  window.addEventListener("click", function (e) {
    var firework = new Firework();
    firework.x = e.clientX;
    firework.y = e.clientY;
    firework.vx = 0;
    firework.vy = 0;
    fireworks.push(firework);
  });
}


create_random_line();

function text1() {
  let one = document.getElementById("one");
  one.innerHTML = "&#9734; Юля, &#9734;";
  decorP(0);
}

function text2() {
  let two = document.getElementById("two");
  two.innerHTML = "&#10048; с днём &#10048;";
  decorP(1);
}

function text3() {
  let three = document.getElementById("three");
  three.innerHTML = "&#9728; рождения! &#9728;";
  decorP(2);
}

function text4() {
  let four = document.getElementById("four");
  four.innerHTML = "&#10084; &#9786; &#10084;";
  decorP(3);
}

setTimeout(text1, 900);

setTimeout(text2, 1400);

setTimeout(text3, 1600);

setTimeout(text4, 1700);

function message() {
  let message = document.getElementById("messageText");
  message.setAttribute("class", "message");
  let messageCont = document.getElementById("messageContainer");
  messageCont.setAttribute("class", "messageCont");
}

function mess() {
  let sign = document.getElementById("signWord");
  sign.setAttribute("class", "displayNone");
  let messBox = document.getElementById("messageBox");
  messBox.setAttribute("class", "message__box");
  let messInner = document.getElementById("messageInner");
  messInner.innerHTML = "чудес";

  message();
  decorP(4);
}

setTimeout(mess, 8000);

function none() {
  let sign = document.getElementById("messageInner");
  sign.setAttribute("class", "displayNone");
}

function mess2() {
  let messBox2 = document.getElementById("messageBox2");
  messBox2.setAttribute("class", "message__box2");
  let messInner2 = document.getElementById("messageInner2");
  messInner2.innerHTML = "радости";

  message();
  decorP(5);
}

setTimeout(mess2, 9000);

function none2() {
  let sign2 = document.getElementById("messageInner2");
  sign2.setAttribute("class", "displayNone");
}

function mess3() {
  let messBox3 = document.getElementById("messageBox3");
  messBox3.setAttribute("class", "message__box3");
  let messInner3 = document.getElementById("messageInner3");
  messInner3.innerHTML = "лёгкости";

  message();
  decorP(6);
}

setTimeout(mess3, 13000);

function none3() {
  let sign3 = document.getElementById("messageInner3");
  sign3.setAttribute("class", "displayNone");
}

function mess4() {
  let messBox4 = document.getElementById("messageBox4");
  messBox4.setAttribute("class", "message__box4");
  let messInner4 = document.getElementById("messageInner4");
  messInner4.innerHTML = "подарков";

  message();
  decorP(7);
}

setTimeout(mess4, 15000);

function none4() {
  let sign4 = document.getElementById("messageInner4");
  sign4.setAttribute("class", "displayNone");
}

function mess5() {
  let messBox5 = document.getElementById("messageBox5");
  messBox5.setAttribute("class", "message__box5");
  let messInner5 = document.getElementById("messageInner5");
  messInner5.innerHTML = "любви";

  message();
  decorP(8);
}

setTimeout(mess5, 17000);

function none5() {
  let sign5 = document.getElementById("messageInner5");
  sign5.setAttribute("class", "displayNone");
}

function mess6() {
  let messBox6 = document.getElementById("messageBox6");
  messBox6.setAttribute("class", "message__box6");
  let messInner6 = document.getElementById("messageInner6");
  messInner6.innerHTML = "гармонии";

  message();
  decorP(9);
}

setTimeout(mess6, 19000);

function none6() {
  let sign6 = document.getElementById("box");
  sign6.setAttribute("class", "displayNone");
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute("id", "c");

  fw();

  let source = document.createElement("source");
  source.setAttribute("src", "artificii.mp3");
  source.setAttribute("type", "audio/mp3");
  let element = document.getElementById("audio");
  element.appendChild(source);

  function music2() {
    let video2 = document.getElementById("audio2");
   video2.play();
   
   }
   music2();
}
//setTimeout(none6, 24000);
*/
}