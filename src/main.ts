import { arrow, autoUpdate, computePosition, flip, offset, shift } from './floating-ui/dom'

const anchor = document.querySelector('#button') as HTMLElement
const floating = document.querySelector('#floating') as HTMLElement
const arrowEl = document.querySelector('#arrow') as HTMLElement

autoUpdate(anchor, floating, () => {
  // Get the actual bounding box dimensions (supports rotation)
  const arrowRect = arrowEl.getBoundingClientRect()
  const arrowSize = Math.hypot(arrowRect.width, arrowRect.height) / 2 // Half of diagonal length
  computePosition(anchor, floating, {
    placement: 'top',
    middleware: [
      offset({ mainAxis: Math.floor(arrowSize / 2) }), // Adjust based on actual arrow size
      flip(),
      shift(),
      arrow({ element: arrowEl }),
    ],
  }).then(({ x, y, middlewareData, placement }) => {
    Object.assign(floating.style, { left: `${x}px`, top: `${y}px` })

    if (middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]]

      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide as string]: `-${arrowSize / 2}px`, // Adjust dynamically
      })
    }
  })
})
