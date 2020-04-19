import React from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '~/clients/storage';

import { login } from '~/actions/user';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';

const { Title } = Typography;

export default function() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}

      validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .required('Password is required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        const dataToSubmit = {
          email: values.email,
          password: values.password
        };

        dispatch(login(dataToSubmit));

        setSubmitting(false);

        }, 500);
      }}
    >
    {props => {
      const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;

      return (
        <Form onSubmit={handleSubmit} style={{ width: '350px' }}>
          <Title level={2}>Log In</Title>
          <Form.Item required>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'text-input error' : 'text-input'
              }
            />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </Form.Item>

            <Form.Item required>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? 'text-input error' : 'text-input'
                }
            />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </Form.Item>
            <Form.Item>
              <Link to="/register">Register</Link>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                Log in
              </Button>
            </Form.Item>
          </Form>
      );
    }}
    </Formik>
  )
};
