import { useEffect, useState } from 'react';
import styles from './RandomPlanet.module.scss';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader/Loader';
import RandomPlanetRender from './RandomPlanetRender';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const RandomPlanet = ({ isErrorThrown, isRestored }) => {
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [planetsInterval, setPlanetsInterval] = useState(null)
  const swapiService = new SwapiService;
  
  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setIsLoading(false);
    setTimeout(()=>{
      setShowContent(true)
    },300)
  }
  
  const onError = (err) => {
    setIsError(true);
    console.log(err)
  }

  const updatePlanet = () => {
    const id = isErrorThrown ? 12000 : Math.floor(Math.random() * 15) + 2;
    console.log(id)

    setIsLoading(true);
    setTimeout(()=>{
    setShowContent(false)
    },300)
    
    setTimeout(()=>{
      swapiService
        .getPlanet(id)
        .then(onPlanetLoaded)
        .catch(onError);
    },500)
  }  

  useEffect(()=>{
    updatePlanet();

    const interval = setInterval(()=>{
      updatePlanet();
    }, 5000)

    setPlanetsInterval(interval)

    return () => clearInterval(interval);
  },[])

  useEffect(()=>{
    if(!isErrorThrown) return;

    setIsError(true)

    clearInterval(planetsInterval)
  },[isErrorThrown])

  useEffect(()=>{
    if(!isRestored) return;

    clearInterval(planetsInterval);

    const interval = setInterval(()=>{
      updatePlanet();
    }, 5000)

    setPlanetsInterval(interval)

    setIsError(false)
  },[isRestored])
  
  return (
    <div className={styles.RandomPlanet}>
      {isError
        ? <ErrorIndicator/>
        : !showContent
        ? <Loader isLoading={isLoading}/>
        : <RandomPlanetRender planet={planet} isLoading={isLoading}/>
      }
    </div>
  )
}

export default RandomPlanet;