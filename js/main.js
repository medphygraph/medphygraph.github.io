(() => {
  const btn = document.querySelector("[data-copy='bibtex']");
  const pre = document.getElementById("bibtex");
  if (btn && pre) {
    btn.addEventListener("click", async () => {
      const text = pre.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied";
        setTimeout(() => {
          btn.textContent = "Copy";
        }, 1500);
      } catch {
        btn.textContent = "Select & copy";
      }
    });
  }

  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll(".tab")];
    const panels = [...root.querySelectorAll(".tab-panel")];

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.getAttribute("data-tab");
        tabs.forEach((t) => {
          const active = t === tab;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach((panel) => {
          const match = panel.getAttribute("data-panel") === id;
          panel.classList.toggle("is-active", match);
          panel.hidden = !match;
        });
      });
    });
  });
})();
