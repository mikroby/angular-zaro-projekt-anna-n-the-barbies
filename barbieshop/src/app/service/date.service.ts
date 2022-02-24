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
    if ((now - start) < 1) {
      localStorage.setItem(`${component}TimeNumber`, '')
      localStorage.setItem(`${component}TimeFormat`, 'less than a minute')
    }
    if ((now - start) > 1) {
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'minutes')
    }
    if ((now - start) > 60 && (now - start) < 60*24) {
      now = Number(Date.now()) / 1000 / 60 / 60
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'hours')
    }
    if ((now - start) > 60*24 && (now - start) < 60*24*7) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'day')
    }
    if ((now - start) > 60*24*7 && (now - start) < 60*24*7*4) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24 / 7
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24 / 7
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'week')
    }
    if ((now - start) > 60*24*7*4 && (now - start) < 60*24*365) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24 / 7 / 4
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24 / 7 / 4
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'month')
    }
    if ((now - start) > 60*24*365) {
      now = Number(Date.now()) / 1000 / 60 / 60 / 24 / 365
      start = Number(localStorage.getItem('start')) / 1000 / 60 / 60 / 24 /365
      localStorage.setItem(`${component}TimeNumber`, String(Math.floor(now-start)))
      localStorage.setItem(`${component}TimeFormat`, 'year')
    }
  }

  editUpdateTimeNumber(component:string): number {
    if (Number(localStorage.getItem(component)) > 0) {
      this.calcUpdateTime(component)
      return Number(localStorage.getItem(`${component}TimeNumber`))
    } else {
      this.calcUpdateTime('basic')
      return Number(localStorage.getItem(`basicTimeNumber`))
    }
  }

  editUpdateTimeFormat(component:string): string {
    if (Number(localStorage.getItem(component)) > 0) {
      this.calcUpdateTime(component)
      return String(localStorage.getItem((`${component}TimeFormat`)))
    } else {
      this.calcUpdateTime('basic')
      return String(localStorage.getItem((`basicTimeFormat`)))
    }
  }

}
