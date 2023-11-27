'use client';

import getCurrentDate from "@/services/getCurrentDate";
import styles from './Date.module.scss';


export default function Date() {
    const date = getCurrentDate();

    return (
        <div className={styles.date}>
            { date }
        </div>
    );
}