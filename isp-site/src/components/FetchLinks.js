// Modules
import * as XLSX from 'xlsx'

const FetchLinks = async() => {
    const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlg8ZxUu1k62DS_PO2pIOenMQozmET4WrivgfAXKv0ctbOXaAZ9CyUbB1gfGVwEoHlNalcMeIHMvh7/pub?output=ods`
    let Links = []

    const data = await fetch(sheetURL)
    const buffer = await data.arrayBuffer()
    const workbook = XLSX.read(buffer, {type:"buffer"})

    if (workbook.hasOwnProperty('Sheets')) {
        workbook.SheetNames.forEach(sheet => {
            Links.push({
            brand: sheet,
            links: XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {defval: null})
            })
        })
    }
    return Links
 }
export default FetchLinks