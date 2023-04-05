class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }

        return res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/people/');

        return res.results.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character =  await this.getResource(`/people/${id}`);

        return this._transformCharacter(character);
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');

        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);

        return this._transformPlanet(planet);
    }

    
    async getAllStarships() {
        const res = await this.getResource('/starship/');
        
        return res.results.map(this._transformStarship);
    }
    
    async getStarship(id) {
        const starship = await this.getResource(`/starship/${id}`);

        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;

        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            // population: this._formatNumber(planet.population),
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
    
    _transformCharacter(character) {
        console.log(character)
        return {
            id: this._extractId(character),
            name: character.name,
            gender: character.gender,
            birthYear: character.birth_year,
            eyeColor: character.eye_color,
        }
    }

    // _formatNumber(number){
    //     console.log(typeof +number)
    //     if(typeof +number !== 'number') return;

    //     let str = String(number);
    //     let newStr = '';
    
    //     for(let i = str.length; i > 0; i--) {
    //         if(i % 3 === 0 && i !== str.length) {
    //             newStr += '.';
    //         }

    //         newStr += str[str.length - i];
    //     }
    
    //     return newStr;
    // }
}


export default SwapiService;