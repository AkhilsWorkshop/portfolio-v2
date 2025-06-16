import { cn } from '@/lib/utils'
import { memo } from 'react'

const ImageSaveWrapper = ({ children, customCSS }) => {
    return (
        <figure className={cn('relative flex-shrink-0 z-0', customCSS)}>
            {children}
            <div className='absolute inset-0 z-[1]' aria-hidden="true" />
        </figure>
    )
}

export default memo(ImageSaveWrapper)