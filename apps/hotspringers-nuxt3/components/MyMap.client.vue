<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LControl } from '@vue-leaflet/vue-leaflet'

const mapOptions = {
  zoomControl: false,
  attributionControl: false,
  // zoomSnap: 0.5,
}

const tileProviders = ref([
  {
    name: 'OpenStreetMap',
    visible: false,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  // TODO: Super long attribution wraps in an odd way on mobile.
  {
    name: 'Satellite View',
    visible: true,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png',
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
])

function toggleLayer() {
  const objIndex = tileProviders.value.findIndex(obj => obj.visible === false)

  tileProviders.value.forEach(provider => {
    provider.visible = false
  })

  tileProviders.value[objIndex].visible = true
}

/*
import L from 'leaflet'
import MiniMap from 'leaflet-minimap'
Minimap logic

const minimapLayer = computed(() => {
  return tileProviders.value.find(provider => provider.visible === false)
})

const layer = new L.TileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
)

function initToggleLayer() {
  const minimapGetter = document.getElementsByClassName(
    'leaflet-control-minimap'
  )
  if (minimapGetter.length > 0) {
    // minimapGetter[0].addEventListener('click', this.toggleLayer)
  }
}
const minimapOptions = {
  position: 'bottomleft',
  width: 75,
  height: 75,
  zoomLevelFixed: true,
  attributionControl: false,
}

const mapObject = ref(new MiniMap(layer, minimapOptions))

const map = ref()
const onMapReady = async () => {
  await nextTick()
  mapObject.value.addTo(map.value.leafletObject)
}
*/
</script>

<template>
  <l-map
    ref="map"
    style="height: 100vh"
    :center="[47.41322, -1.219482]"
    :zoom="4"
    :options="mapOptions"
    @ready="onMapReady"
  >
    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      layer-type="base"
    />

    <l-control position="bottomright">
      <button
        id="toggleLayerBtn"
        class="btn rounded-t tooltip"
        @click="toggleLayer"
      >
        <i class="material-icons-outlined text-sm align-middle">layers</i>
        <span class="tooltip-text left capitalize"> toggle </span>
      </button>
      <button id="userLocationBtn" class="btn border-t border-gray-300 tooltip">
        <i class="material-icons text-sm align-middle">gps_fixed</i>
        <span class="tooltip-text left capitalize"> location </span>
      </button>
      <button
        id="resetViewBtn"
        class="btn border-t border-gray-300 tooltip"
        @click=""
      >
        <i class="material-icons text-sm align-middle">restart_alt</i>
        <span class="text-xs tooltip-text left capitalize"> reset view </span>
      </button>
      <button
        id="zoomInBtn"
        class="btn border-t border-gray-300 tooltip"
        @click=""
      >
        <i class="material-icons text-sm align-middle">add</i>
        <span class="text-xs tooltip-text left capitalize"> zoom in </span>
      </button>
      <button
        id="zoomOutBtn"
        class="btn border-t border-gray-300 rounded-b tooltip"
      >
        <i class="material-icons text-sm align-middle">remove</i>
        <span class="tooltip-text left capitalize"> zoom out </span>
      </button>
    </l-control>
  </l-map>
</template>

<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.btn {
  @apply p-2 bg-gray-100 transition duration-300 ease-in-out block;
}

.btn:hover {
  @apply bg-gray-300;
}
</style>
