import information from '@/services/objectList/information';
import styles from './Header.module.scss';
import IconGithub from '@/icons/IconGithub';
import IconLinkedin from '@/icons/IconLinkedin';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    const phrases = information();

    return (
        <section className={styles.header}>
            <div className={styles.LC}>
                <p>LC</p>  
            </div>
            <section className={styles.sectionProfile}>
                <div className={styles.profile}>
                    <div className={styles.divLeft}>
                        <div className={styles.profilePicture}>
                            <Image 
                                src={'/profile.jpg'}
                                alt={'Profile image'}
                                fill={true}
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    objectPosition: 'top right',
                                }}
                            />
                        </div>
                        <p>Lucas Cidral</p>
                    </div>
                    <div className={styles.divRight}>
                        {phrases.map((phrase, index) => (
                            <p key={index}>{phrase}</p>
                        ))}
                        <div className={styles.icons}>
                            <Link href="https://github.com/cidralll" target="_blank"><IconGithub /></Link>
                            <Link href="https://linkedin.com/in/lucas-cidral-b01686241" target="_blank"><IconLinkedin /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}