import RasterTileControl from './'
import mapboxgl from 'mapbox-gl'

// @ts-ignore
const { registerPlugin } = window.geolonia || window.tilecloud || {}

registerPlugin &&
  registerPlugin((map: mapboxgl.Map, target: HTMLElement) => {
    const { url = '#' } = target.dataset || {}
    // @ts-ignore
    map.addControl(new RasterTileControl(url))
  })
