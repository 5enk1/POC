import { Injectable } from '@angular/core';

// the following service is created to fetch data about the anime that you provide to it (it should provide data to the card mechanic)
@Injectable({
  providedIn: 'root'
})
export class AnimeCardServiceService {
  constructor() { }
  /**
  * MyShityFunctionToCallTheAPI
  */
  public async MyShityFunctionToCallTheAPI(animeToSearch) {
    try {
      console.log(animeToSearch)
      const url = "localhost:8080"
      const res = await fetch(url)      
      const data = await res.json()
      return data
    } catch (error) {
      console.error("PEEPEE")
    }
  }
}
