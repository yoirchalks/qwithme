import _ from 'lodash'
export function cleanResults(object: object[], fields: string[]): object[] {
    return object.map(f => _.omit(f, fields))
}
export function cleanResult(object: object, fields: string[]): object{
    return _.omit(object, fields)
}