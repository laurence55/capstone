import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #E6EEFF;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
  font-style: italic;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #1a1a1a;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #F0F2F7;
  font-size: 1rem;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4834d4;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #4834d4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #372aaa;
  }
`;

const LoginText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #4834d4;
    font-weight: 500;
    margin-left: 0.25rem;
  }
`;

const Illustration = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <LeftSection>
        <Title>Welcome to SmartStock</Title>
        <Description>
          Empowering students, teachers, and staff with a seamless
          way to request and manage essential equipment. Your
          voice matters—vote for what you need, and let us handle
          the rest. Stay organized, stay efficient, with SmartStock!
        </Description>
        <Illustration 
          src="/inventory-illustration.svg" 
          alt="Inventory Management Illustration" 
        />
      </LeftSection>
      <RightSection>
        <Form onSubmit={handleSubmit}>
          <FormTitle>USER SIGN UP</FormTitle>
          <Input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <SignUpButton type="submit">SIGN UP</SignUpButton>
          <LoginText>
            Already have an account?
            <Link to="/login">Login</Link>
          </LoginText>
        </Form>
      </RightSection>
    </Container>
  );
};

export default SignUp; 