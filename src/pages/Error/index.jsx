import rocket from 'assets/imgs/404.png';
import styles from './Error.module.scss';

export default function Error(){
    return(
        <main className={styles.error}>
            <img className={styles.error__img} src={rocket} alt='error'/>
            <div className={styles.error__box}>
                <h1 className={styles.error__box__title}>404</h1>
                <p className={styles.error__box__text}>The rocket team has won this time</p>
                <button className={styles.error__box__btn}>Return</button>
            </div>
        </main>
    )
}