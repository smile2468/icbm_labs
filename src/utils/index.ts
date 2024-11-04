import { DragEvent, SyntheticEvent } from 'react'
import { v4 } from 'uuid'

export const classNames = (...args: string[]) => args.join(' ')

export const createUniqueUUIDKey = () => v4()

export function useDragPreventionProps () {
  return {
    onDragStart: (e: DragEvent<unknown>) => e.preventDefault(),
    onSelect: (e: SyntheticEvent<unknown, Event>) => e.preventDefault(),
    onSelectCapture: (e: SyntheticEvent<unknown, Event>) => e.preventDefault()
  }
}

export const randomIntFromInterval = (min: number, max: number): string => Math.floor(Math.random() * (max - min + 1) + min).toString()
