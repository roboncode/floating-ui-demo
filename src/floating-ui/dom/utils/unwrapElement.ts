import { isElement } from '../platform/isElement'
import type { VirtualElement } from '../types'

/**
 * Unwraps an element that might be either a real DOM Element or a VirtualElement.
 *
 * @param element - Either a DOM Element or a VirtualElement
 * @returns For real DOM elements, returns the element itself.
 *          For virtual elements, returns their contextElement (the actual DOM element they reference).
 *
 * This is useful when working with floating UI positioning where we might need to
 * handle both real DOM elements and virtual elements (like mouse cursor position)
 * in a consistent way.
 */
export function unwrapElement(element: Element | VirtualElement) {
  return !isElement(element) ? element.contextElement : element
}
