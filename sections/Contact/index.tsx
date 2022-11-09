import type { NextPage } from 'next'
import Alert from '../../components/Alert'
import FormField from '../../components/FormField'
import Input from '../../components/Input'
import Loader from '../../components/Loader'
import TextArea from '../../components/TextArea'
import { ContactStyled, FormContactStyled } from './style'
import useContact from './useContact'

const Contact: NextPage = () => {
    const { form, errors, handleChange, handleSubmit, alert, setAlert, loading } = useContact()
    return (
        <ContactStyled id="contact" className="container">
            <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Contacto</h2>
            <FormContactStyled method="post" data-netlify="true" name="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact-form" />
                <div>
                    <FormField errorMessage={errors.name || ''} label="Nombres">
                        <Input
                            disabled={loading}
                            onChange={handleChange as () => void}
                            name="name"
                            value={form.name}
                            autoComplete="off"
                            placeholder="p. ej. , Erik Garcia"
                        />
                    </FormField>
                </div>
                <div>
                    <FormField errorMessage={errors.email || ''} label="Email">
                        <Input
                            disabled={loading}
                            onChange={handleChange as () => void}
                            name="email"
                            value={form.email}
                            autoComplete="off"
                            placeholder="p. ej. , erik.gt@gmail.com"
                        />
                    </FormField>
                </div>
                <div style={{ marginTop: '.5em', display: 'flex', flexDirection: 'column' }}>
                    <FormField label="Asunto" errorMessage={errors.matter || ''}>
                        <TextArea
                            disabled={loading}
                            onChange={handleChange as () => void}
                            name="matter"
                            value={form.matter}
                            placeholder="Cuéntame los detalles del servicio para poder apoyarte a realizarlo"
                        />
                    </FormField>
                </div>
                <Alert
                    style={{
                        marginTop: '0.5em',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setAlert({
                            show: false,
                            message: '',
                            type: 'danger',
                        })
                    }}
                    show={alert.show}
                    type={alert.type}
                >
                    {'Mensaje'}
                </Alert>
                <div style={{ marginTop: '1em' }}>
                    <button disabled={loading} type="submit" className="button_contact">
                        {loading ? <Loader /> : 'Enviar'}
                    </button>
                </div>
            </FormContactStyled>
        </ContactStyled>
    )
}

export default Contact
