const info = postsData;

const SinglePost = props => {
    const title = props.post.title;
    const paragraph = props.post.body;
    return (
        <div clasName="container">
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{props.post.title}</span>
                            <p>{props.post.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Main = (props) => {
    return (
        <div className="js-outer-div">
            {props.info.map((item, i) => <SinglePost post={item} key={i} />)}
        </div>
    )
}

const Header = props => {
    return (
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo center">Blog App</a>
            </div>
        </nav>
    )
}

const App = props => {
    return (
      <div>
          <Header className='nav-extended'/>
          <Main info={info}/> 
      </div>
    )
}

console.log(info);

const root = document.querySelector('#root');

ReactDOM.render(<App />, root)