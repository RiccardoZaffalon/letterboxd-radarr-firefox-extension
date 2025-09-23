const Selector = {
  panel: ".js-actions-panel",
};

document.addEventListener("DOMContentLoaded", () => {
  const { tmdbId } = document.body.dataset;

  const $panel = document.querySelector(Selector.panel);

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

  if ($panel && $panel.children?.length) {
    $panel.insertBefore($element, $panel.children[0]);
    insertAtPosition($panel, $element, 0);
  }

  console.log($panel);
});
