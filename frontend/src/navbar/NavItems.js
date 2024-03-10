import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItems.css';

class NavItems extends Component {
  render() {
    const isActive = this.props.isActive || (this.props.item === this.props.activeParent);
    const menuType = this.props.isMain ? 'main-menu' : 'sub-menu';

    return (
      <li id={this.props.item} className={isActive ? `active ${menuType}` : menuType}>
        <Link to={this.props.to} onClick={() => { if (typeof this.props.activenav === 'function') this.props.activenav(this.props.item) }}>
          {this.props.item}
        </Link>

        {this.props.children && isActive && (
          <ul>
            {React.Children.map(this.props.children, (child) => React.cloneElement(child, { activenav: this.props.activenav, activeParent: this.props.item, isActive: this.props.isActive, isMain: false }))}
          </ul>
        )}
      </li>
    );
  }
}

export default NavItems;
