// Modules
import * as XLSX from 'xlsx'

const FetchLinks = async() => {
    return []
 }
export default FetchLinks



// https://docs.google.com/spreadsheets/d/157IxGbgA2UayS-hYRJnRhrtpGp5nXdNuKpN96RRBbbE
/* 
const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlg8ZxUu1k62DS_PO2pIOenMQozmET4WrivgfAXKv0ctbOXaAZ9CyUbB1gfGVwEoHlNalcMeIHMvh7/pub?output=ods`
let Redirects = []

const fetchWorkbook = async(url) => {
    const data = await fetch(url)
    const buffer = await data.arrayBuffer()
    const workbook = XLSX.read(buffer, {type:"buffer"})
    return workbook
}
const workbook = fetchWorkbook(sheetURL)

if (workbook.hasOwnProperty('Sheets')) {
    console.log("Workbook has sheets")
    workbook.SheetNames.forEach(sheet => {
        console.log("Sheet: ", sheet)
        Redirects.push({
        brand: sheet,
        links: XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {defval: null})
        })
    })
} else {
    console.log("Workbook does not have sheets")
}


export default Redirects
*/