import React , {Component} from 'react';




class ListItem extends Component{
  render(){
    const { title,desc} = this.props;
    if(!title){
      return(
        null
      )
    }
    return(
      <div data-test="ListItemComponet">
        <h2 data-test="componentTitle">{title}</h2>
        <div data-test="componentDesc">
          {desc}
        </div>
      </div>
    )
  }
}

export default ListItem;