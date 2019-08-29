import mapboxgl from 'mapbox-gl'

export default class RasterTileControl {
  private urlTemplates: string[]
  private opacity: number

  constructor(urlTemplates: string | string[], opacity: number) {
    this.urlTemplates =
      typeof urlTemplates === 'string' ? [urlTemplates] : urlTemplates
    this.opacity = opacity
  }

  onAdd(map: mapboxgl.Map) {
    map.on('load', () => {
      map
        .addLayer({
          id: 'geolonia-raster-tile-control',
          type: 'raster',
          source: {
            type: 'raster',
            tiles: this.urlTemplates,
            tileSize: 256
          }
        })
        .setPaintProperty(
          'geolonia-raster-tile-control',
          'raster-opacity',
          this.opacity
        )
    })
  }

  onRemove() {}
}
