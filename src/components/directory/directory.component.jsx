import React from "react";

import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          credit: "Joshua Coleman",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          credit: "Amanda Vick",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
          credit: "Luis Felipe Lins",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          credit: "freestocks",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://images.unsplash.com/photo-1517938889432-a2ac9241a486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
          credit: "Bruce Mars",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections?.map(({ title, id, imageUrl }) => (
          <MenuItem key={id} title={title}  />
        ))}
      </div>
    );
  }
}

export default Directory;
