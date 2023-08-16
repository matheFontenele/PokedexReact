import pikapika from 'assets/imgs/BannerComplete.png'
import styles from './Banner.module.scss'

export default function Banner(){
    return(
        <section className={styles.banner}>
            <div className={styles.banner__info}>
                <h1 className={styles.banner__info__h1}>Find all your favorite Pokemon</h1>
                <p className={styles.banner__info__h4}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <button className={styles.banner__info__btn}>See pokemons</button>
            </div>
            <img className={styles.banner__img} src={pikapika} alt='banner'/>
        </section>
    )
}