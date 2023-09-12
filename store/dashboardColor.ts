import { atom } from "recoil";


type DashboardColor = string[]



export const dashboardColorState = atom<DashboardColor>({
  key: 'dashboardColorState',
  
  default: ['#5959a4', '#b3f864','#a1e05a','#5959a4']
})