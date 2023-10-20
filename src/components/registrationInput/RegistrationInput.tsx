import styles from './RegistrationInput.module.scss';

interface Props {
    text: string,
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function RegistrationInput({ text, setInput }: Props) {

    return (
        <div className={styles.divInput}>
            <div>
                <p>{`${text}:`}</p>
                <input onChange={(event) => setInput(event.target.value)} />
            </div>
        </div>
    );
}