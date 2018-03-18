const ShoppingListItem = props => {
    return (
        <li>{props.name}</li>
    )
}

const ShoppingList = props => {
    return (
        <ul>
            {props.items.map((item, i) => <ShoppingListItem name={item} key={i} />)}
        </ul>
    )
}

class App extends React.Component {
    componentDidMount() {
        console.log(this.h1);        
    }
    
    render() {
        return (
            <div>
                <h1 ref={(el) => { this.h1 = el; }}>{this.props.title}</h1>
                <ShoppingList items={this.props.name}/>
            </div>
        )
    }
}

// const App = props => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <ShoppingList items={props.name}/>
//         </div>
//     )
    
// }

const root = document.getElementById('root');
const props = {
    title: "Something",
    name: ["Beer", "Wine", "Whiskey", "Vodka", "Gin", "Rakijestina"]
}


ReactDOM.render(<App {...props} />, root)