import React from 'react'
import Image from 'next/image'

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
        <div
            style={{
                // padding: '0.5em',
                // background: 'red',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'rgb(0 0 0 / 16%) 0px 0px 7px',
            }}
        >
            <div
                style={{
                    height: '250px',
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    loading="lazy"
                    height={'250px'}
                    width={'450px'}
                    src={src}
                    alt={title}
                />
            </div>
            <div
                style={{
                    padding: '1em 1em',
                }}
            >
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
                        <p
                            key={i}
                            style={{
                                background: '#4f4f4f',
                                padding: '0.2em',
                                borderRadius: '5px',
                                color: 'white',
                                minWidth: '40px',
                                textAlign: 'center',
                            }}
                        >
                            {key}
                        </p>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5em', width: '100%', flexWrap: 'wrap', marginTop: '1em' }}>
                    {urls.map((url, i) => (
                        <a key={i} href={url.href} target="_blank" rel="noopener noreferrer">
                            <span>
                                <Image loading="lazy" src={url.src} alt={url.alt} width={30} height={30} />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardProject
