// GSAP Panel Animation
function gsapAni() {
  gsap.from("#content", {
    x: 500,
    duration: 0.5,
    ease: "power3.out",
  });

  gsap.from(".closeBtn img", {
    delay: 1,
    y: -100,
    ease: "power3.out",
  });

  document.getElementById("pscoBtn").style.pointerEvents = "none";
  document.getElementById("agBtn").style.pointerEvents = "none";
  document.getElementById("talBtn").style.pointerEvents = "none";
  document.getElementById("thgBtn").style.pointerEvents = "none";
}

function showContent() {
  document.getElementById("content").style.display = "block";
}

function hideTal() {
  document.getElementById("talContent").style.display = "none";
}

function hideThg() {
  document.getElementById("thgContent").style.display = "none";
}

const psco = {
  pscoPanel: function () {
    showContent();
    document.getElementById("pscoContent").style.display = "block";
    hideTal();
    hideThg();
    gsapAni();
  },
};

const ag = {
  agPanel: function () {
    showContent();
    document.getElementById("agContent").style.display = "block";
    hideTal();
    hideThg();
    gsapAni();
  },
};

const ncbm = {
  ncbmPanel: function () {
    showContent();
    document.getElementById("ncbmContent").style.display = "block";
    hideTal();
    hideThg();
    gsapAni();
  },
};

const tal = {
  talPanel: function () {
    showContent();
    document.getElementById("talContent").style.display = "block";
    hideThg();
    gsapAni();
  },
};

const thg = {
  thgPanel: function () {
    showContent();
    document.getElementById("thgContent").style.display = "block";
    hideTal();
    gsapAni();
  },
};
