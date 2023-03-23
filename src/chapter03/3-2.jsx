/*
class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World " />,
    document.getElementById('root')
)


class Hello extends React.Component{
    render(){
        return React.createElement('div', null, 'Hello ${this.props.toWhat}');
    }
}

ReactDOM.render(
    React.createElement(Hello, { toWhat: 'World'}),
    document.getElementById('root')
)

const element = (
    <h1 className="greeting">
        Hello, World!
    </h1>
)

const element = React.createElement(
    'h1',
    {className : 'greeting'},
    'Hello, world!'

const element = (
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
)

React.createElement(
    type,
    [props],
    [...children]
)
*/