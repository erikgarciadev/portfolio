import React from 'react'
import { URL_IMAGE_NOT_FOUND } from '../../utils/constants'
import Image, { ImageProps } from 'next/image'
import styles from './styles.module.css'
import { classNames } from '../../utils/util'
import PhotoIcon from '../Icons/Photo'

interface Props extends Omit<ImageProps, 'onLoad' | 'onError'> {
    srcError?: string
}

export default function ImageSkeleton({ srcError = URL_IMAGE_NOT_FOUND, ...props }: Props) {
    const [imageSrc, setImageSrc] = React.useState(props.src)
    const [loading, setLoading] = React.useState(true)

    const handleError = () => {
        setImageSrc(srcError)
    }

    const handleLoad = () => {
        setLoading(false)
    }

    return (
        <>
            {loading ? (
                <>
                    <div
                        className={classNames(
                            styles.skeleton,
                            styles['animate-pulse'],
                            props.className ?? styles['h-full'],
                            loading ? styles['flex'] : styles['hidden'],
                        )}
                    >
                        <PhotoIcon />
                    </div>
                </>
            ) : null}
            <Image
                {...props}
                className={classNames(styles.image, loading ? styles['h-0'] : props.className ?? styles['h-full'])}
                onError={handleError}
                onLoad={handleLoad}
                src={`${imageSrc}`}
            />
        </>
    )
}

