//using classes as component
// import {Component} from 'react'

// class Header extends Component {
//     render(){
//         return( 
//         <h1>I a m {this.props.data} </h1>
//         )
//       }
// }


//using functions as component
function Header(props){
    return (
        <h1>I a m {props.data} </h1>
    )
}
export default Header