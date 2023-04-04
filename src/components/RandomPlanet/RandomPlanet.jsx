import styles from './RandomPlanet.module.scss';
import planet from '../../assets/img/3.jpg';

const RandomPlanet = () => {


    return (
    <div className={styles.RandomPlanet}>
      <img className={styles.img} src={planet}/>
      <div className={styles.content}>
        <h2 className={styles.title}>
          PlanetName
        </h2>
        <ul className={styles.featuresList}>
          <li className={styles.feature}>Population: </li>
          <li className={styles.feature}>Rotation period: </li>
          <li className={styles.feature}>Diametr: </li>
        </ul>
      </div>
    </div>
  )
}

export default RandomPlanet;