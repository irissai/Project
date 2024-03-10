import React, { Component } from 'react';
import NavItems from './NavItems';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
    };
  }

  activeItem = (item) => {
    this.setState(prevState => ({
      NavItemActive: prevState.NavItemActive === item ? '' : item,
    }));
  }
  
  closeSubmenus = () => {
    // Close all submenus
    document.querySelectorAll('.nav ul li ul').forEach(submenu => submenu.style.display = 'none');
  };

  render() {
    return (
      <nav>
        <h2>BIOMECHANICS & POSSIBLE MOVEMENT</h2>
        <p>จำนวนบท : </p>
        <ul>
          <NavItems
            item="Biomechanical consideration"
            to="/Biomechanical-consideration"
            activenav={this.activeItem}
            isActive={this.state.NavItemActive === "Biomechanical consideration"}
            closeSubmenus={this.closeSubmenus}
          >
            <NavItems item="Lever" to="/Biomechanical-consideration/Lever" isActive={this.state.NavItemActive === "Lever"} />
            <NavItems item="Support" to="/Biomechanical-consideration/Support" isActive={this.state.NavItemActive === "Support"} />
          </NavItems>

          <NavItems
            item="Possible movement of RPD"
            to="/Possible-movement-of-RPD"
            activenav={this.activeItem}
            isActive={this.state.NavItemActive === "Possible movement of RPD"}
            closeSubmenus={this.closeSubmenus}
          >
            <NavItems item="สี่เหลี่ยม (SQUARE, QUADRILATEAL)" to="/Possible-movement-of-RPD/SQUARE_QUADRILATEAL" isActive={this.state.NavItemActive === "สี่เหลี่ยม (SQUARE, QUADRILATEAL)"} />
            <NavItems item="สามเหลี่ยม (TRIANGULAR, TRIPOD)" to="/Possible-movement-of-RPD/TRIANGULAR_TRIPOD" isActive={this.state.NavItemActive === "สามเหลี่ยม (TRIANGULAR, TRIPOD)"} />
            <NavItems item="เส้นตรง (STRAIGHT)" to="/Possible-movement-of-RPD/STRAIGHT" isActive={this.state.NavItemActive === "เส้นตรง (STRAIGHT)"} />
            <NavItems item="การเคลื่อนที่ของฟันเที่ยม" to="/Possible-movement-of-RPD/Movement_of_artificial_teeth" isActive={this.state.NavItemActive === "การเคลื่อนที่ของฟันเที่ยม"} />
          </NavItems>

          <NavItems
            item="RPD sample case"
            to="/" 
            activenav={this.activeItem}
            isActive={this.state.NavItemActive === "RPD sample case"}
            closeSubmenus={this.closeSubmenus}
          />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
