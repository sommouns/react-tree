import React from 'react'
import ReactDom from 'react-dom'
import Tree from './components/tree'
import data from './data'

ReactDom.render(<Tree data={data}/>, document.getElementById('root'))