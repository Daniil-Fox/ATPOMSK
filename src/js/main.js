import "./_components.js";
import { burger } from "./functions/burger.js";

initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const map = new YMap(
    document.getElementById("map"),

    {
      location: {
        center: [37.588144, 55.733842],

        zoom: 16,
      },
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerContainerElement = document.createElement("div");
  markerContainerElement.classList.add("marker-container");

  const markerElement = document.createElement("div");
  markerElement.classList.add("marker");

  markerContainerElement.appendChild(markerElement);

  map.addChild(
    new YMapMarker(
      {
        coordinates: [37.588144, 55.733842],
      },
      markerContainerElement
    )
  );
}
