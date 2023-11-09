import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import ImageSkeleton from '../../components/ImageSkeleton'

const CardProject = ({
    src,
    title,
    keys,
    description,
    urls = [],
}: {
    src: string
    title: string
    keys: string[]
    urls?: {
        src: string
        href: string
        alt: string
    }[]
    description?: string
}) => {
    return (
        <div className={styles.card_project}>
            <div className={styles['card_project_container-img']}>
                <ImageSkeleton
                    className={styles.img_project}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    src={src}
                    alt={title}
                />
            </div>
            <div className={styles['card_project_container-information']}>
                <div>
                    <p
                        style={{
                            fontSize: '24px',
                            marginBottom: '10px',
                        }}
                    >
                        {title}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5em', width: '100%', flexWrap: 'wrap' }}>
                        {keys.map((key, i) => (
                            <p key={i} className={styles.card_project_badge}>
                                {key}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={styles['card_project_container-icons']}>
                    {urls.map((url, i) => (
                        <a key={i} href={url.href} target="_blank" rel="noopener noreferrer">
                            <Image
                                loading="lazy"
                                aria-label={url.alt}
                                src={url.src}
                                alt={url.alt}
                                width={30}
                                height={30}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardProject
