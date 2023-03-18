import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Inject, Toolbar, Sort, Filter, ContextMenu } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3x1'>
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp" 
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ ContextMenu, Page, Search, Toolbar, Sort, Filter ]} />
      </GridComponent>
    </div>
  )
}

export default Employees