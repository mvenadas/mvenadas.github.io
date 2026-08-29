(() => {
  "use strict";
  const totalPages = 214;
  const pages = Array.from({ length: totalPages }, (_, i) => `pages/yearbook-${String(i + 1).padStart(3, "0")}.jpg`);
  const desktopSpreads = [[0]];
  for (let i = 1; i < totalPages; i += 2) desktopSpreads.push(i + 1 < totalPages ? [i, i + 1] : [i]);
  const singlePages = pages.map((_, i) => [i]);
  const singlePageQuery = window.matchMedia("(max-width: 1100px)");
  const book = document.querySelector("#book"), wrap = document.querySelector("#bookWrap");
  const previous = document.querySelector("#previous"), next = document.querySelector("#next");
  const spreadLabel = document.querySelector("#spreadLabel"), pageLabel = document.querySelector("#pageLabel");
  const strip = document.querySelector("#filmstrip"), zoom = document.querySelector("#zoom"), reader = document.querySelector("#reader");
  let currentPage = 0, turning = false, zoomed = false, touchStart = null;
  const groups = () => singlePageQuery.matches ? singlePages : desktopSpreads;
  const groupIndex = () => Math.max(0, groups().findIndex((group) => group.includes(currentPage)));
  const pageHTML = (page, side, count) => {
    const className = count === 1 ? (page === 0 ? "cover" : "single-page") : (side === 0 ? "left-page" : "right-page");
    return `<figure class="page ${className}"><img src="${pages[page]}" alt="Yearbook page ${page + 1}" draggable="false"><span class="paper-light"></span></figure>`;
  };
  function render() {
    const allGroups = groups(), index = groupIndex(), visible = allGroups[index];
    wrap.classList.toggle("is-closed", visible.length === 1 && visible[0] === 0);
    wrap.classList.toggle("is-single", visible.length === 1 && visible[0] !== 0);
    wrap.classList.toggle("is-open", visible.length > 1);
    book.innerHTML = visible.map((page, side) => pageHTML(page, side, visible.length)).join("");
    previous.disabled = index === 0 || turning; next.disabled = index === allGroups.length - 1 || turning;
    spreadLabel.textContent = singlePageQuery.matches ? `PAGE ${visible[0] + 1}` : `SPREAD ${index + 1}`;
    pageLabel.textContent = `${visible.map((page) => page + 1).join("–")} OF ${totalPages}`;
    strip.querySelectorAll("button").forEach((button, page) => button.classList.toggle("active", visible.includes(page)));
    strip.querySelector("button.active")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
  function go(targetIndex) {
    const allGroups = groups(), index = groupIndex();
    if (turning || targetIndex < 0 || targetIndex >= allGroups.length || targetIndex === index) return;
    turning = true;
    const direction = targetIndex > index ? "forward" : "backward", visible = allGroups[index];
    const flip = direction === "forward" ? visible[visible.length - 1] : visible[0], leaf = document.createElement("div");
    leaf.className = `turning-page ${direction}`;
    leaf.innerHTML = `<img src="${pages[flip]}" alt="" draggable="false"><span class="turn-shade"></span>`;
    book.appendChild(leaf); previous.disabled = next.disabled = true;
    window.setTimeout(() => { currentPage = allGroups[targetIndex][0]; turning = false; render(); }, 560);
  }
  pages.forEach((src, page) => {
    const button = document.createElement("button");
    button.setAttribute("aria-label", `Go to page ${page + 1}`);
    button.innerHTML = `<img src="${src}" alt="" loading="lazy"><span>${page + 1}</span>`;
    button.addEventListener("click", () => {
      const target = groups().findIndex((group) => group.includes(page));
      if (target === groupIndex()) { currentPage = page; render(); } else go(target);
    });
    strip.appendChild(button);
  });
  previous.addEventListener("click", () => go(groupIndex() - 1));
  next.addEventListener("click", () => go(groupIndex() + 1));
  zoom.addEventListener("click", () => {
    zoomed = !zoomed; wrap.style.setProperty("--zoom", zoomed ? "1.22" : "1");
    zoom.textContent = zoomed ? "Fit page" : "Zoom"; zoom.setAttribute("aria-pressed", String(zoomed));
  });
  document.querySelector("#fullscreen").addEventListener("click", () => document.documentElement.requestFullscreen?.());
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); go(groupIndex() + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); go(groupIndex() - 1); }
    if (event.key === "Escape" && zoomed) zoom.click();
  });
  reader.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  reader.addEventListener("touchend", (event) => {
    if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) go(groupIndex() + (distance < 0 ? 1 : -1)); touchStart = null;
  }, { passive: true });
  singlePageQuery.addEventListener("change", () => { turning = false; render(); });
  render();
})();
