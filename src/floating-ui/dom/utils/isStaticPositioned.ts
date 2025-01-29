import { getComputedStyle } from '../../utils/dom'

/**
 * Checks if an element has static positioning.
 *
 * @param element - The DOM element to check
 * @returns boolean - true if the element has position: static, false otherwise
 *
 * In CSS, position: static is the default positioning behavior where elements
 * follow the normal document flow. Unlike position: fixed, absolute, or relative:
 * - Static elements cannot be moved using top/right/bottom/left properties
 * - Static elements are not affected by z-index
 * - Static elements cannot be used as positioning context for absolutely positioned children
 *
 * This check is often used when determining if an element can serve as
 * a positioning reference for floating/popover elements.
 */
export function isStaticPositioned(element: Element): boolean {
  return getComputedStyle(element).position === 'static'
}
