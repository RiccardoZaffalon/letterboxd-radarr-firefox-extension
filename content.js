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

    $element.innerHTML = `
    <a
      target="_blank"
      href="${url}/add/new?term=tmdb:${tmdbId}"
      class="letterboxd-to-radarr-extension--link">
        <span>Add to Radarr</span>
      <img width="16" src="https://radarr.video/img/favicon-16x16.png">
    </a>
  `;

    $panel.insertBefore($element, $panel.children[0]);
  });
});
