// Modules
import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'

//const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlg8ZxUu1k62DS_PO2pIOenMQozmET4WrivgfAXKv0ctbOXaAZ9CyUbB1gfGVwEoHlNalcMeIHMvh7/pub?output=ods`


export default function GetRedirects(URL) {

    const [wb, getWb] = useState(`Loading worksheet...`)
    const ls = []

    useEffect(() => {
        const fetchWorkbook = async(u) => {
            const d = await fetch(u)
            const b = await d.arrayBuffer()
            const w = XLSX.read(b)
            getWb(w)
        }
        fetchWorkbook(URL)
        }, [])

        if (wb.hasOwnProperty('Sheets')) {
        wb.SheetNames.forEach(sheet => {
            ls.push({
            brand: sheet,
            links: XLSX.utils.sheet_to_json(wb.Sheets[sheet], {defval: null})
            })
        })
        }
        return ls
    }


