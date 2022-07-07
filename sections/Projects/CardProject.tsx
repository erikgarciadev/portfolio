import React from 'react'

const CardProject = ({
    src,
    title,
    keys,
    description,
}: {
    src: string
    title: string
    keys: string[]
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
            <div>
                <img
                    style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                    }}
                    src={src}
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
                <div style={{ display: 'flex', gap: '5px', width: '100%', flexWrap: 'wrap' }}>
                    {keys.map((key, i) => (
                        <p
                            key={i}
                            style={{
                                background: 'gray',
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
            </div>
        </div>
    )
}

export default CardProject

