import { atom } from "recoil";


type DashboardColor = string[]



export const dashboardColorState = atom<DashboardColor>({
  key: 'dashboardColorState',
  
  default: ['#5959a4', '#b3f864']
})