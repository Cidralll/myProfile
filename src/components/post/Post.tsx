import IconCalendarDates from "@/icons/IconCalendarDates";
import RedirectPost from "../redirectPost/RedirectPost";
import Image from 'next/image';
import styles from './Post.module.scss';

interface Props {
    titlePost: string,
    subtitlePost: string,
    deploymentLink: string,
    deploymentText: string
    githubLink: string,
    githubText: string,
    date: string,
    srcImg: string,
    altImg: string
    key: string
}

export default function Post({ titlePost, subtitlePost, deploymentLink, deploymentText, githubLink, githubText, date, srcImg, altImg, key }: Props) {
    return (
        <div className={styles.post} key={key}>
          <h2 className={styles.titlePost}>{ titlePost }</h2>
          <h3 className={styles.subtitlePost}>{ subtitlePost }</h3>
          <RedirectPost link={deploymentLink} text={deploymentText} />
          <RedirectPost link={githubLink} text={githubText} />
          <div className={styles.divDate}>
            <IconCalendarDates style={{marginLeft: '0.8rem'}} />
            <p className={styles.publicationDate}>{ date }</p>
          </div>
          <div className={styles.divImage}>
            <Image 
              src={srcImg}
              alt={altImg}
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
    );
}
