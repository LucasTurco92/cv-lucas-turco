import React from 'react';
import Styles from './expanded-title.module.css';

const ExpandedTitle = (component) =>{
  const [open, handleOpen] = useOpen();

    return (
        <div className={`${Styles.expand}${title}`}>
          <button onClick={() => handleOpen}>
          <component/>
          </button>
        </div>
      );
}


export default ExpandedTitle;