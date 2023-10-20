'use client'
import RegistrationInput from '@/components/registrationInput/RegistrationInput';
import styles from './page.module.scss';
import { useState } from 'react';
import getCurrentDate from '@/services/getCurrentDate';

export default function Page() {
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [deploymentLink, setDeploymentLink] = useState<string>('');
    const [githubLink, setGithubLink] = useState<string>('');
    const date = getCurrentDate();
    const [srcImg, setSrcImg] = useState<string>('');
    const [altImg, setAltImg] = useState<string>('');
    const [msgError, setMsgError] = useState<string>('');


    const send = async () => {
       
        if (title === '' || subtitle === '' || srcImg === '' || altImg === '') {
            return setMsgError('Informe os campos obrigatórios!')
        }
        setMsgError('');

        const post = {
            titlePost: title,
            subtitlePost: subtitle,
            deploymentLink: deploymentLink,
            githubLink: githubLink,
            date: date,
            srcImg: srcImg,
            altImg: altImg
        }

    }

    return (
        <main className={styles.mainAdm}>
            <section className={styles.sectionAdm}>
                <div className={styles.divTitle}>
                    <h1>Post creation</h1>
                </div>
                <div className={styles.line} />
                <RegistrationInput text='Title' setInput={setTitle} />
                <RegistrationInput text='Subitle' setInput={setSubtitle} />
                <RegistrationInput text='Deployment Link' setInput={setDeploymentLink} />
                <RegistrationInput text='Github Link' setInput={setGithubLink} />
                <RegistrationInput text='URL Image' setInput={setSrcImg} />
                <RegistrationInput text='Alt Image' setInput={setAltImg} />
                {msgError !== ''? (
                    <span className={styles.msgError}>{ msgError }</span>
                ): <></>}
                <button className={styles.submitButton} onClick={() => send()}>Enviar</button>
            </section>
        </main>
    );
}
