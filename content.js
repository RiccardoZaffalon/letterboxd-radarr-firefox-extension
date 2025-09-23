const Selector = {
  panel: "[data-type=film] .js-actions-panel",
};

document.addEventListener("DOMContentLoaded", () => {
  const { tmdbId } = document.body.dataset;

  if (!tmdbId) return;

  const $panel = document.querySelector(Selector.panel);

  if (!$panel) return;

  if (!$panel.children?.length) return;

  browser.storage.local.get({ url: "http://localhost:7878" }).then((result) => {
    const url = result.url;

    const $element = document.createElement("li");

    // Create the anchor element
    const $link = document.createElement("a");
    $link.setAttribute("target", "_blank");
    $link.setAttribute("href", `${url}/add/new?term=tmdb:${tmdbId}`);
    $link.classList.add("letterboxd-to-radarr-extension--link");

    // Create the text span
    const $span = document.createElement("span");
    $span.textContent = "Add to Radarr";

    // Create the image
    const $img = document.createElement("img");
    $img.setAttribute("width", "16");
    $img.setAttribute("src", "https://radarr.video/img/favicon-16x16.png");

    // Append the elements to build the structure
    $link.appendChild($span);
    $link.appendChild($img);
    $element.appendChild($link);

    $panel.insertBefore($element, $panel.children[0]);
  });
});
