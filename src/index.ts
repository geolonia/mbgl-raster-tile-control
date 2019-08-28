import mapboxgl from 'mapbox-gl'

export default class RasterTileControl {
  private urlTemplates: string[]

  constructor(urlTemplates: string | string[]) {
    this.urlTemplates =
      typeof urlTemplates === 'string' ? [urlTemplates] : urlTemplates
  }

  onAdd(map: mapboxgl.Map) {
    map.on('load', () =>
      map.addLayer({
        id: 'geolonia-raster-tile-control',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: this.urlTemplates,
          tileSize: 256
        }
      })
    )
  }

  onRemove() {}
}
