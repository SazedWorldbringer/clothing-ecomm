import React from 'react';

import MenuItem from '../menu-item/menu-item.component.jsx';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [{
        title: 'hats',
        imageUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        credit: 'Héctor J. Rivas',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        credit: 'Amanda Vick',
        id: 2
      },
      {
        title: 'shoes',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        credit: 'REVOLT',
        id: 3
      },
      {
        title: 'women',
        imageUrl: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        credit: 'Adam Winger',
        size: 'large',
        id: 4
      },
      {
        title: 'men',
        imageUrl: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        credit: 'Matheus Ferrero',
        size: 'large',
        id: 5
      },
      ]
    }
  }

  render() {
    return(
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
            <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>
         ))}
      </div>
    )
  }
}

export default Directory;
