import Image, { type ImageProps } from 'next/image'

import { useDragPreventionProps } from '@/utils'

export default function ImageComponent ({ src, alt, ...props }: ImageProps) {
  const dragPreventionProps = useDragPreventionProps()
  return <Image
    src={src}
    alt={alt}
    fetchPriority='auto'
    priority
    {...props}
    {...dragPreventionProps} />
}
