async function drawWatermark({
  container = document.body,
  zIndex = 1000,
  font = '16px microsoft yahei',
  color = 'rgba(0,0,0,0.1)',
  content = 'WATERMARK',
  rotate = 30,
  width = 100,
  height = 100,
  repeat = true
} = {}) {
  if (!content) { return }
  let pageWidth = document.documentElement.clientWidth
  let pageHeight = document.documentElement.clientHeight
  let canvas = document.createElement('canvas')

  canvas.setAttribute('width', `${width}px`)
  canvas.setAttribute('height', `${height}px`)

  let ctx = canvas.getContext('2d')

  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.font = font
  ctx.fillStyle = color
  ctx.rotate(Math.PI / 180 * rotate)
  ctx.fillText(content, width / 2, 0)

  function getBlobUrl(icanvas) {
    return new Promise((resolve) => {
      icanvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob))
      })
    })
  }
  const urlMark = `vue-watermark-blob-url-${content}`
  if (sessionStorage.getItem(urlMark)) {
    URL.revokeObjectURL(sessionStorage.getItem(urlMark))
    sessionStorage.removeItem(urlMark)
  }
  const blobUrl = await getBlobUrl(canvas)
  sessionStorage.setItem(urlMark, blobUrl)

  let prevWatermarkDiv = container.firstChild
  let watermarkDiv

  if (prevWatermarkDiv && prevWatermarkDiv.id === 'vue-watermark-directive') {
    watermarkDiv = prevWatermarkDiv
  } else {
    watermarkDiv = document.createElement('div')
    watermarkDiv.id = 'vue-watermark-directive'
  }

  watermarkDiv.setAttribute(
    'style',
    `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: ${zIndex};
      pointer-events: none;
      background-repeat: ${repeat ? 'repeat' : 'no-repeat'};
      background-image: url('${blobUrl}');
    `
  )

  container.style.position = 'relative'
  if (!prevWatermarkDiv || prevWatermarkDiv.id !== 'vue-watermark-directive') {
    container.insertBefore(watermarkDiv, container.firstChild)
  }
}

module.exports = drawWatermark
