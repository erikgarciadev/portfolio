import type { NextPage } from 'next'
import Alert from '../../components/Alert'
import FormField from '../../components/FormField'
import Input from '../../components/Input'
import Loader from '../../components/Loader'
import TextArea from '../../components/TextArea'
import useContact from './useContact'
import { SECTIONS } from '../../utils/constants'
import styles from './style.module.css'
import useTranslation from 'next-translate/useTranslation'

const Contact: NextPage = () => {
    const { form, errors, handleChange, handleSubmit, alert, setAlert, loading } = useContact()

    const { t } = useTranslation('contact')
    const { t: tUtils } = useTranslation('utils')

    return (
        <section id={SECTIONS.contact} className={`${styles.contact} container`}>
            <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>{tUtils('sections.contact')}</h2>
            <form
                className={styles.form_contact}
                method="post"
                data-netlify="true"
                name="contact-form"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <div>
                    <FormField errorMessage={errors.name || ''} label={t('names')}>
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
                <div style={{ marginTop: '0.5em' }}>
                    <FormField errorMessage={errors.email || ''} label={t('email')}>
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
                <div style={{ marginTop: '0.5em' }}>
                    <FormField label={t('subject')} errorMessage={errors.matter || ''}>
                        <TextArea
                            disabled={loading}
                            onChange={handleChange as () => void}
                            name="matter"
                            value={form.matter}
                            placeholder={t('subject_placeholder')}
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
                    {alert.message}
                </Alert>
                <div style={{ marginTop: '1em' }}>
                    <button disabled={loading} type="submit" className="button_contact">
                        {loading ? <Loader /> : t('send')}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact
