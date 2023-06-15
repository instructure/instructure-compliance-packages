// Modules
import { read, utils } from '../../node_modules/xlsx/dist/xlsx.mini.min.js'

export default async function FetchLinks() {
    // https://docs.google.com/spreadsheets/d/157IxGbgA2UayS-hYRJnRhrtpGp5nXdNuKpN96RRBbbE
    const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlg8ZxUu1k62DS_PO2pIOenMQozmET4WrivgfAXKv0ctbOXaAZ9CyUbB1gfGVwEoHlNalcMeIHMvh7/pub?output=ods`
    let Links = []

    const data = await fetch(sheetURL)
    const buffer = await data.arrayBuffer()
    const workbook = read(buffer, {type:"buffer"})

    if (workbook.hasOwnProperty('Sheets')) {
        workbook.SheetNames.forEach(sheet => {
            Links.push({
            brand: sheet,
            links: utils.sheet_to_json(workbook.Sheets[sheet], {defval: null})
            })
        })
    }
    return Links
 }