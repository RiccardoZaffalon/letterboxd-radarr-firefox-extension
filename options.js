browser.storage.local.get({ url: "http://localhost:7878" }).then((result) => {
  document.getElementById("url").value = result.url;
});

document.getElementById("options").addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.getElementById("url").value;

  browser.storage.local.set({ url: value }).then(() => {
    const status = document.getElementById("status");
    status.textContent = "Saved";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});
