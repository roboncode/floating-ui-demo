export type {
  AlignedPlacement,
  Alignment,
  Axis,
  ClientRectObject,
  Coords,
  Dimensions,
  ElementRects,
  Length,
  Padding,
  Placement,
  Rect,
  Side,
  SideObject,
  Strategy,
  VirtualElement,
} from '../utils'
export { computePosition } from './computePosition'
export { detectOverflow } from './detectOverflow'
export type { DetectOverflowOptions } from './detectOverflow'
export { arrow } from './middleware/arrow'
export type { ArrowOptions } from './middleware/arrow'
export { autoPlacement } from './middleware/autoPlacement'
export type { AutoPlacementOptions } from './middleware/autoPlacement'
export { flip } from './middleware/flip'
export type { FlipOptions } from './middleware/flip'
export { hide } from './middleware/hide'
export type { HideOptions } from './middleware/hide'
export { inline } from './middleware/inline'
export type { InlineOptions } from './middleware/inline'
export { offset } from './middleware/offset'
export type { OffsetOptions } from './middleware/offset'
export { limitShift, shift } from './middleware/shift'
export type { LimitShiftOptions, ShiftOptions } from './middleware/shift'
export { size } from './middleware/size'
export type { SizeOptions } from './middleware/size'
export type {
  Boundary,
  ComputePosition,
  ComputePositionConfig,
  ComputePositionReturn,
  Derivable,
  ElementContext,
  Elements,
  FloatingElement,
  Middleware,
  MiddlewareData,
  MiddlewareReturn,
  MiddlewareState,
  Platform,
  ReferenceElement,
  RootBoundary,
} from './types'
// This export exists only for backwards compatibility. It will be removed in
// the next major version.
export { rectToClientRect } from '../utils'
