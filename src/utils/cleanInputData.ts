import _ from 'lodash'

export default function cleanInputData(data: object): object{
   return Object.entries(data).filter(([_, v]) => v != null)
}