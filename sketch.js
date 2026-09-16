// ==================================================
// IMÁGENES
// ==================================================

let collage;
let iglesia;
let colectivo;
let puente;
let abuelos;


// ==================================================
// ZONAS DE CLICK
// ==================================================

// IGLESIA
let iglesiaX = 100;
let iglesiaY = 180;
let iglesiaAncho = 350;
let iglesiaAlto = 300;

// IGLESIA - CAJA 2
let iglesiaX2 = 100;
let iglesiaY2 = 480;
let iglesiaAncho2 = 180;
let iglesiaAlto2 = 170;


// ==================================================
// COLECTIVO
let colectivoX = 285;
let colectivoY = 490;
let colectivoAncho = 390;
let colectivoAlto = 400;

// PUENTE
let puenteX = 570;
let puenteY = 10;
let puenteAncho = 700;
let puenteAlto = 400;

// ABUELOS
let abuelosX = 680;
let abuelosY = 530;
let abuelosAncho = 290;
let abuelosAlto = 420;


// ==================================================
// ESTADOS
// ==================================================

let iglesiaActiva = false;
let colectivoActivo = false;
let puenteActivo = false;
let abuelosActivos = false;


// ==================================================
// DEBUG
// ==================================================

// true = muestra los rectángulos
// false = oculta los rectángulos

let debug = true;


// ==================================================
// CARGAMOS LAS IMÁGENES
// ==================================================

function preload() {

  collage = loadImage("img/collage.png");
  iglesia = loadImage("img/iglesia.png");
  colectivo = loadImage("img/colectivo128.png");
  puente = loadImage("img/puente.png");
  abuelos = loadImage("img/abuelos.png");

}


// ==================================================
// CONFIGURACIÓN
// ==================================================

function setup() {

  createCanvas(1620, 975);

}


// ==================================================
// DIBUJAMOS
// ==================================================

function draw() {

  background(0);


  // --------------------------------------------------
  // COLLAGE DE FONDO
  // --------------------------------------------------

  image(collage, 0, 0);


  // --------------------------------------------------
  // Imagenes ACTIVAS
  // --------------------------------------------------

  // IGLESIA
  if (iglesiaActiva) {
    image(iglesia, 55, 90);
  }

  // COLECTIVO
  if (colectivoActivo) {
    image(colectivo, -258, 215);
  }

  // PUENTE
  if (puenteActivo) {
    image(puente, 158, -160);
  }

  // ABUELOS
  if (abuelosActivos) {
    image(abuelos, 645, 485);
  }


  // ==================================================
  // RECTÁNGULOS DE DEBUG
  // ==================================================

  if (debug) {

    noFill();
    strokeWeight(3);


    // --------------------------------------------------
    // IGLESIA
    // --------------------------------------------------

    stroke(255, 0, 0);

    rect(
      iglesiaX,
      iglesiaY,
      iglesiaAncho,
      iglesiaAlto
    );

    // Caja 2
stroke(255, 0, 0);
rect(iglesiaX2, iglesiaY2, iglesiaAncho2, iglesiaAlto2);

    // --------------------------------------------------
    // COLECTIVO
    // --------------------------------------------------

    stroke(0, 255, 0);

    rect(
      colectivoX,
      colectivoY,
      colectivoAncho,
      colectivoAlto
    );


    // --------------------------------------------------
    // PUENTE
    // --------------------------------------------------

    stroke(0, 150, 255);

    rect(
      puenteX,
      puenteY,
      puenteAncho,
      puenteAlto
    );


    // --------------------------------------------------
    // ABUELOS
    // --------------------------------------------------

    stroke(255, 255, 0);

    rect(
      abuelosX,
      abuelosY,
      abuelosAncho,
      abuelosAlto
    );

  }

}


// ==================================================
// FUNCIÓN PARA DETECTAR SI EL MOUSE ESTÁ EN UNA ZONA
// ==================================================

function mouseDentroZona(x, y, ancho, alto) {

  return mouseX > x &&
         mouseX < x + ancho &&
         mouseY > y &&
         mouseY < y + alto;

}


// ==================================================
// CLICK DEL MOUSE
// ==================================================

// ==================================================
// CLICK DEL MOUSE
// ==================================================

function mousePressed() {


  // --------------------------------------------------
  // IGLESIA
  // --------------------------------------------------

  // La iglesia tiene DOS cajas.
  // Si hago click en la caja 1 O en la caja 2,
  // se activa/desactiva la iglesia.

  if (
    mouseDentroZona(
      iglesiaX,
      iglesiaY,
      iglesiaAncho,
      iglesiaAlto
    )

    ||

    mouseDentroZona(
      iglesiaX2,
      iglesiaY2,
      iglesiaAncho2,
      iglesiaAlto2
    )
  ) {

    iglesiaActiva = !iglesiaActiva;

  }


  // --------------------------------------------------
  // COLECTIVO
  // --------------------------------------------------

  else if (mouseDentroZona(
    colectivoX,
    colectivoY,
    colectivoAncho,
    colectivoAlto
  )) {

    colectivoActivo = !colectivoActivo;

  }


  // --------------------------------------------------
  // PUENTE
  // --------------------------------------------------

  else if (mouseDentroZona(
    puenteX,
    puenteY,
    puenteAncho,
    puenteAlto
  )) {

    puenteActivo = !puenteActivo;

  }


  // --------------------------------------------------
  // ABUELOS
  // --------------------------------------------------

  else if (mouseDentroZona(
    abuelosX,
    abuelosY,
    abuelosAncho,
    abuelosAlto
  )) {

    abuelosActivos = !abuelosActivos;

  }

}