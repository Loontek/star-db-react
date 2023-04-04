import { useEffect, useState } from 'react';
import SwapiService from '../../services/SwapiService';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';
import ItemsList from '../ItemsList/ItemsList';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './StarDbApp.module.scss';

const StarDbApp = () => {
    // const [swapi,setSwapi] = useState(null);
    // const [id,setId] = useState(null)
    // const swapiService = new SwapiService;
    // const person = {
    //   name:null,
    //   birthYear: null,
    //   gender: null,
    // }

    // useEffect(()=> {
    //   swapiService.getResource('https://swapi.dev/api/people/1/')
    //     .then(data => setSwapi(data))
    // }, [])

    // useEffect(()=>{
    //   person
    // },[swapi])

    // console.log(swapi)

    return (
    <div className={styles.StarDbApp}>
      {/* <h1>{}</h1> */}
      <Header/>
      <main>
        {/* <div className={styles.box}/> */}
        <RandomPlanet/>
        <ItemsList/>
        <ItemCard/>
      </main>
    </div>
  )
}

export default StarDbApp;