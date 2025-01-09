import { React, useState, useRef } from "react";
import { Row, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './Form.css'

const NewUserForm = ({ register }) => {
    const initialState = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const [formData, setFormData] = useState(initialState);
    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = () => {
        passwordType === 'password' 
        ? setPasswordType('text')
        : setPasswordType('password')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        register({ 
            info: {
                username: formData.username,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email
            }
        })
    }

    return (
            <div className='mx-auto'>
                <div className='display-5 text-start border-bottom mt-3'>Register Here</div>
                <Form onSubmit={handleSubmit} className='form my-4'>
                    <Form.Group>
                    {formData.username === '' ? (
                        <Form.Control 
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={ formData.username || '' }
                            onChange={ handleChange }
                        />
                    ) : (
                        <FloatingLabel controlId='username' label='Username'>
                            <Form.Control 
                                autoFocus
                                type='text'
                                name='username'
                                value={ formData.username || '' }
                                onChange={ handleChange }
                            />
                        </FloatingLabel>
                    )}
                    </Form.Group>
                    <Form.Group className='form-input-container text-start my-4'>
                        <InputGroup>
                        {formData.password === '' ? (
                            <>
                                <Form.Control 
                                    required
                                    className='form-input'
                                    type={ passwordType }
                                    name='password'
                                    placeholder='Password'
                                    value={ formData.password || '' }
                                    onChange={handleChange}
                                    style={{ height: '2.5rem' }}
                                />
                                <Button variant="link" onClick={ togglePassword } className='password-btn border py-0'>
                                {passwordType === 'password' 
                                    ? <FontAwesomeIcon icon={ faEye } /> 
                                    : <FontAwesomeIcon icon={ faEyeSlash } />}
                                </Button>
                            </>
                        ) : (
                            <>
                                <FloatingLabel controlId='password' label='Password'>
                                    <Form.Control
                                        required
                                        autoFocus
                                        type={ passwordType }
                                        name='password'
                                        value={ formData.password || '' }
                                        onChange={ handleChange }
                                    />
                                </FloatingLabel>
                                <Button variant="link" onClick={ togglePassword } className='password-btn border py-0'>
                                {passwordType === 'password' 
                                    ? <FontAwesomeIcon icon={ faEye } /> 
                                    : <FontAwesomeIcon icon={ faEyeSlash } />}
                                </Button>
                            </>
                        )}
                        </InputGroup>
                    </Form.Group>
                    <Row className='my-4'>
                        <Form.Group className='col-6'>
                        {formData.firstName === '' ? (
                            <Form.Control 
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                value={ formData.firstName || '' }
                                onChange={ handleChange }
                            />
                        ) : (
                            <FloatingLabel controlId='firstName' label='First Name'>
                                <Form.Control 
                                    autoFocus
                                    type='text'
                                    name='firstName'
                                    value={ formData.firstName || '' }
                                    onChange={ handleChange }
                                />
                            </FloatingLabel>
                        )}
                        </Form.Group>
                        <Form.Group className='col-6'>
                        {formData.lastName === '' ? (
                            <Form.Control 
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                value={ formData.lastName || '' }
                                onChange={ handleChange }
                            />
                        ) : (
                            <FloatingLabel controlId='lastName' label='Last Name'>
                                <Form.Control 
                                    autoFocus
                                    type='text'
                                    name='lastName'
                                    value={ formData.lastName || '' }
                                    onChange={ handleChange }
                                />
                            </FloatingLabel>
                        )}
                        </Form.Group>
                    </Row>
                    <Form.Group className='my-4'>
                    {formData.email === '' ? (
                        <Form.Control 
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={ formData.email || '' }
                            onChange={ handleChange }
                        />
                    ) : (
                        <FloatingLabel controlId='email' label='Email'>
                            <Form.Control 
                                autoFocus
                                type='email'
                                name='email'
                                value={formData.email || ''}
                                onChange={ handleChange }
                            />
                        </FloatingLabel>
                    )}
                    </Form.Group>
                    <Row>
                        <Form.Group className='mt-3'>
                            <Button 
                                type='submit'
                                variant='outline-success'
                                className='col-6 col-xs-12 mx-2' 
                            >Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
    
        )
}

export default NewUserForm