import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';

function Register() {
    const layout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 16,
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
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'phone']} label="Phone Number">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'username']} label="Username" rules={[
                {
                    required: true,
                },
            ]}>
                <Input />

            </Form.Item>
            <Form.Item name={['user', 'password']} label="Password" rules={[
                {
                    required: true,
                },
            ]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'confirmPassword']} label="Confirm Password" rules={[
                {
                    required: true,
                },
            ]}>
                <Input />
            </Form.Item>


            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
                <Button type="primary" htmlType="submit">
                    Submit
              </Button>
            </Form.Item>
        </Form>
    );
}

export default Register
