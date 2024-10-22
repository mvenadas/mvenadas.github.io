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

  document.getElementById("fiveheBtn").style.pointerEvents = "none";
  document.getElementById("pscoBtn").style.pointerEvents = "none";
  document.getElementById("agBtn").style.pointerEvents = "none";
  document.getElementById("talBtn").style.pointerEvents = "none";
  document.getElementById("thgBtn").style.pointerEvents = "none";
}

function hideAllPanels() {
  document.getElementById("fiveheContent").style.display = "none";
  document.getElementById("pscoContent").style.display = "none";
  document.getElementById("agContent").style.display = "none";
  document.getElementById("ncbmContent").style.display = "none";
  document.getElementById("talContent").style.display = "none";
  document.getElementById("squatzContent").style.display = "none";
  document.getElementById("jaanContent").style.display = "none";
  document.getElementById("focusContent").style.display = "none"; // Ensure this is correct
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

const fivehe = {
  fivehePanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("fiveheContent").style.display = "block";
    hideTal();
    hideThg();
    hidePsco();
    hideAg();
    hideNcbm();
    gsapAni();
  },
};

const jaan = {
  jaanPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("jaanContent").style.display = "block";
    gsapAni();
  },
};

const focus = {
  focusPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("focusContent").style.display = "block"; // Ensure this matches the actual ID
    console.log("Focus panel is being triggered"); // For debugging
    gsapAni();  // Run GSAP animation
  },
};

const squatz = {
  squatzPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("squatzContent").style.display = "block";
    hideTal();
    hideThg();
    gsapAni();
  },
};

const psco = {
  pscoPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("pscoContent").style.display = "block";
    hideTal();
    hideThg();
    hideYana();
    gsapAni();
  },
};

const ag = {
  agPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("agContent").style.display = "block";
    hideTal();
    hideThg();
    hideYana();
    gsapAni();
  },
};

const ncbm = {
  ncbmPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("ncbmContent").style.display = "block";
    hideTal();
    hideThg();
    hideYana();
    gsapAni();
  },
};

const tal = {
  talPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("talContent").style.display = "block";
    hideThg();
    hideYana();
    gsapAni();
  },
};

const thg = {
  thgPanel: function () {
    hideAllPanels();  // Hide all panels first
    showContent();
    document.getElementById("thgContent").style.display = "block";
    hideTal();
    hideYana();
    gsapAni();
  },
};

$(".closeBtn").on("click", function () {
  hideAllPanels();
  document.getElementById("content").style.display = "none";
});
