const Selector = {
  panel: ".js-actions-panel",
};

document.addEventListener("DOMContentLoaded", () => {
  const { tmdbId } = document.body.dataset;

  if (!tmdbId) return;

  const $panel = document.querySelector(Selector.panel);

  if (!$panel) return;

  if (!$panel.children?.length) return;

  const $element = document.createElement("li");

  $element.innerHTML = `
    <a
        target="_blank"
        href="http://192.168.1.124:7878/add/new?term=tmdb:${tmdbId}"
        class="letterboxd-to-radarr-extension--link">
            <span>Add to Radarr</span>
        <img src="https://radarr.video/img/favicon-16x16.png">
    </a>
  `;

  $panel.insertBefore($element, $panel.children[0]);
});
