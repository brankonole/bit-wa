const ShoppingListItem = props => {
    return (
        <li>{props.name}</li>
    )
}

const ShoppingList = props => {
    return (
        <ul>
            { props.items.map((item, i) => <ShoppingListItem name={item} key={i}/> ) }
        </ul>
    )
}

class App extends React.Component {
    

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
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

ReactDOM.render(<App title={"Something"} name={["Beer", "Wine", "Whiskey", "Vodka", "Gin", "Rakijestina"]} />, root)