import React, {component} from 'react'

class Header extends Component {

    render(){
        return (
            <div>
                <p>{this.props.tittle}</p>
            </div>
        );
    }
}

export default Header;