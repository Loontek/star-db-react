import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./RandomPlanet.module.scss";

const RandomPlanetRender = ({ planet, isLoading }) => {
  const [showPlanet, setShowPlanet] = useState(false);
  
  useEffect(()=> {
    if(isLoading) {
      setShowPlanet(false);

      return;
    }

    setShowPlanet(true);
  },[isLoading])

  return (
    <>
    <CSSTransition
      in={showPlanet}
      timeout={300}
      classNames={{
        appear: styles.wrapperAppear,
        appearActive: styles.wrapperAppearActive,
        enter: styles.wrapperEnter,
        enterActive: styles.wrapperEnterActive,
        enterDone: styles.wrapperEnterDone,
        exit: styles.wrapperExit,
        exitActive: styles.wrapperExitActive,
        exitDone: styles.wrapperExitDone
      }}
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
          alt={planet.name}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{planet.name}</h2>
          <ul className={styles.featuresList}>
            <li className={styles.item}>
              <span className={styles.itemName}>Population</span>
              <span className={styles.itemValue}>{planet.population}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemName}>Rotation period</span>
              <span className={styles.itemValue}>{planet.rotationPeriod}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemName}>Diametr</span>
              <span className={styles.itemValue}>{planet.diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
    </>
  );
};

export default RandomPlanetRender;