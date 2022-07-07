import type { NextPage } from 'next'
import Image from 'next/image'
import useContact from './useContact'

const Contact: NextPage = () => {
    const { form, errors, handleChange, handleSubmit } = useContact()
    return (
        <section
            id="contact"
            className="container"
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '2em' }}
        >
            <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Contact</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1000px',
                    width: '100%',
                    margin: '0 auto',
                }}
            >
                <div>
                    <label style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)' }}>Email</label>
                    <input
                        style={{ width: '100%', padding: '0.5em', borderRadius: '10px' }}
                        onChange={handleChange}
                        name="email"
                        value={form.email}
                        autoComplete="off"
                    ></input>
                    {errors.email && <p className="text-error">{errors.email}</p>}
                </div>
                <div style={{ marginTop: '.5em', display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)' }}>Asunto</label>
                    <textarea
                        style={{
                            resize: 'none',
                            padding: '0.5em',
                            borderRadius: '10px',
                            height: '100px',
                            width: '100%',
                        }}
                        onChange={handleChange}
                        name="matter"
                        value={form.matter}
                    ></textarea>
                    {errors.matter && <p className="text-error">{errors.matter}</p>}
                </div>
                <div style={{ marginTop: '1em' }}>
                    <button
                        type="submit"
                        style={{
                            padding: '0.5em',
                            border: '2px solid var(--primary)',
                            background: 'transparent',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            width: '100px',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            fontSize: '14px',
                        }}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact
