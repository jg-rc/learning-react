import {PropTypes} from 'react'
import React from 'react'
import app from '../../css/app.css'
const task = ({title,type})=><div className={app.app}>
  {title}
</div>


export default task