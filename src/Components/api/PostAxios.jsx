 import axios from "axios";
 let url=axios.create({
    baseURL:"https://restcountries.com/v3.1"
 })
 export function get(){
  return url.get("/all?fields=name,capital,flags,region,population")
 }
 export function getOne(name){
  return url.get(`/name/${name}`)
 }
