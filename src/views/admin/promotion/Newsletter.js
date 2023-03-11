import React from 'react'
import ColumnsTable from '../tables/components/ColumnsTable'
import { columnsDataColumns } from '../default/variables/columnsData'
import tableDataColumns from "../../../views/admin/tables/variables/tableDataColumns.json"


function Newsletter() {
  return (
    <div className='mt-6' >
      <ColumnsTable
        columnsData={columnsDataColumns}
        tableData={tableDataColumns}>
      </ColumnsTable>
    </div>
  )
}

export default Newsletter