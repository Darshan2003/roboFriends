import React,{Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            hasError: false
        }
    }
    componentDidCatch()
    {
        this.setState({hasError: true})
    }
    render()
    {
        if (this.state.hasError) {
            return <h1>Something With Went Wrong</h1>
            
        }
        return this.props.children
    }
}
export default ErrorBoundry;