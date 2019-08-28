import RasterTileControl from './'
import mapboxgl from 'mapbox-gl'

// @ts-ignore
const { registerPlugin } = window.geolonia || window.tilecloud || {}

const isDisabled = (target: HTMLElement, snakeCasedAttributeKey: string) => {
  const dataset = target.dataset as { [key: string]: string }
  const attributeKey = snakeCasedAttributeKey
    .split('-')
    .map((phrase, i) =>
      i === 0 ? phrase : phrase[0].toUpperCase() + phrase.slice(1)
    )
    .join('')

  const isDefined = attributeKey in dataset
  const isDisabled =
    !isDefined ||
    dataset[attributeKey] === '' ||
    (!!dataset[attributeKey] &&
      dataset[attributeKey].toUpperCase() !== 'DISABLED')

  return isDisabled
}

registerPlugin &&
  registerPlugin((map: mapboxgl.Map, target: HTMLElement) => {
    // if (!isDisabled(target, 'geolonia-raster-tile-disabled')) {
    const { url = '#' } = target.dataset || {}
    // @ts-ignore
    map.addControl(new RasterTileControl(url))
    // }
  })
