import React, { Component } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'

class Register extends Component {

    state = {
        name:'',
        email:'',
        age:0,
        phone:'',
        username:'',
        password:'',
        confirmPassword:''
    }
    submit = () => {
        // e.preventDefault();
        console.log(this.state)
        axios.post('localhost:5000/api/registers',this.state.name)
        .then(res => console.log(res.data))
    }

    render() {
        const layout = {
            labelCol: {
                span: 7,
            },
            wrapperCol: {
                span: 13,
            },
        };
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            // <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
            //     <Form.Item
            //         name={['user', 'name']}
            //         label="Name"
            //         rules={[{ required: true }]}>
            //         <Input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item
            //         name={['user', 'email']}
            //         label="Email"
            //         rules={[{ type: 'email' }]}>
            //         <Input value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item
            //         name={['user', 'age']}
            //         label="Age">
            //         <Input value={this.state.age} onChange={(e) => this.setState({age:Number(e.target.value)})}/>
            //     </Form.Item>
            //     <Form.Item name={['user', 'phone']} label="Phone Number">
            //         <Input value={this.state.phone} onChange={(e) => this.setState({phone:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true }]}>
            //         <Input  value={this.state.username} onChange={(e) => this.setState({username:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
            //         <Input value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item name={['user', 'confirmPassword']} label="Confirm Password" rules={[{ required: true }]}>
            //         <Input value={this.state.confirmPassword} onChange={(e) => this.setState({confirmPassword:e.target.value})}/>
            //     </Form.Item>
            //     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            //         <Button type="primary" htmlType="submit" onClick={this.submit}>Submit</Button>
            //     </Form.Item>
            // </Form>
        );
    }

}

export default Register
