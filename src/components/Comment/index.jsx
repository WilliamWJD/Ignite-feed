import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './styles.module.css';

import { Avatar } from '../Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/williamwjd.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>William Dias</strong>
                            <time title="09 de junho de 2022 ás 09:15" dateTime="2022-06-11 09:15:00">Públicado há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}