import Link from 'next/link';
import styles from './RedirectPost.module.scss';

interface Props {
    link: string,
    text: string
}

export default function RedirectPost({ link, text } : Props) {

    if (link === '' && text === '') {
        return <></>
    }

    return (
        <div className={styles.redirectPost}>
            <Link
                href={link} 
                target="_blank" 
            >
                {`# ${text}`}
            </Link>
        </div>
    );
}