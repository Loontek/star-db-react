import { useEffect, useState } from 'react';
import SwapiService from '../../services/SwapiService';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';
import ItemsList from '../ItemsList/ItemsList';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './StarDbApp.module.scss';

const StarDbApp = () => {
  const [isErrorThrown, setIsErrorThrown] = useState(false);
  const [isRestored, setIsRestored] = useState(false);

  const handleErrowThrow = () => {
    setIsErrorThrown(true)
    setIsRestored(false)
  }

  const handleRestore = () => {
    setIsErrorThrown(false)
    setIsRestored(true)
  }

    return (
    <div className={styles.StarDbApp}>
      <Header handleErrowThrow={handleErrowThrow} handleRestore={handleRestore}/>
      <main>
        <RandomPlanet isErrorThrown={isErrorThrown} isRestored={isRestored}/>
        <ItemsList/>
        <ItemCard/>
      </main>
    </div>
  )
}

export default StarDbApp;