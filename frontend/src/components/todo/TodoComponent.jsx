import React, {Component} from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: parseInt(this.props.params.id),
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return;
        }

        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState({description: response.data.description, targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')}))
    }

    validate(values) {
        let errors = {};

        if (!values.description) {
            errors.description = 'Enter a description';
        }

        return errors;
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (todo.id === -1) {
            TodoDataService.createTodo(username, todo)
            .then(() => this.props.navigate('/todos'))
        } else {
            TodoDataService.updateTodo(username, todo.id, todo)
            .then(() => this.props.navigate('/todos'))
        }
    }

    render() {
        let {description, targetDate} = this.state;
        
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description, targetDate}} 
                        onSubmit={this.onSubmit} 
                        validate={this.validate} 
                        validateOnChange={false} 
                        validateOnBlur={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;