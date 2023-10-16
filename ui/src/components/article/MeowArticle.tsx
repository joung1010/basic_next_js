'use client';
import React, {useEffect, useState} from 'react';
import styles from "./MeowArticle.module.css";

function MeowArticle() {
    const [text, setText] = useState();
    useEffect(() => {
        const res = fetch('https://meowfacts.herokuapp.com')
            .then(res => res.json())
            .then(data => {
                setText(data.data[0])
            });
    }, []);


    return (
        <>
            {!text && <div>Loading....</div>}
            <article className={styles.article}>{text}</article>
        </>

    );
}

export default MeowArticle;