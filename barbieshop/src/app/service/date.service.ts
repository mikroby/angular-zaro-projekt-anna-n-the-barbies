import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  setToLocalStorage(key: string) {
    localStorage.setItem(`${key}date`, Date())
    localStorage.setItem(key, Date.now().toString())
  }

  calcUpdateTime(component: string) {
    let now = Number(Date.now()) / 1000 / 60
    let start
    if (!localStorage.getItem(component)) {
    start = Number(localStorage.getItem('start')) / 1000 /60
    } else {
    start = Number(localStorage.getItem(component)) / 1000 /60
    }
    if (now - start < 1) {
      localStorage.setItem(`${component}TimeNumber`, '')
      localStorage.setItem(`${component}TimeFormat`, 'less than a minute')
    }
    if (now - start > 1) {
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'minutes')
    }
    if (now - start > 60) {
      now = Number(Date.now()) / 1000 / 60 / 60
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'hours')
    }
    if (now - start > 60*24) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'day')
    }
    if (now - start > 60*24*365) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24 / 365
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24 /365
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'year')
    }
  }

  editUpdateTime(component:string, timeNumber: number, timeFormat: string ) {
    //console.log(Number(localStorage.getItem(`${component}TimeNumber`)))
    if (Number(localStorage.getItem(`${component}TimeNumber`)) != 0) {
      timeNumber = Number(localStorage.getItem(`${component}TimeNumber`))
    }
    timeFormat = String(localStorage.getItem((`${component}TimeFormat`)))
  }
      /*if (Number(localStorage.getItem(`basicTimeNumber`)) != 0) {
      this.timeNumber = Number(localStorage.getItem(`basicTimeNumber`))
    }
    this.timeFormat = String(localStorage.getItem((`basicTimeFormat`)))*/

}
