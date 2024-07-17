import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImageIn from '../../assets/images/in1png.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [isShowPassword, setIsShowPassword] = useState(false);
  // const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setIsShowPassword(!isShowPassword);
  // };

  // const toggleConfirmPasswordVisibility = () => {
  //   setIsShowConfirmPassword(!isShowConfirmPassword);
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowPassword, setIsShowpassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowpassword(!isShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'rgb(0, 0, 0, 0.53)' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng ký tài khoản mới</p>
          <InputForm
            style={{ marginBottom: '10px' }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: '10',
                position: 'absolute',
                top: '4px',
                right: '8px',
                cursor: 'pointer',
              }}
              onClick={togglePasswordVisibility}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ position: 'relative', marginTop: '10px' }}>
            <span
              style={{
                zIndex: '10',
                position: 'absolute',
                top: '4px',
                right: '8px',
                cursor: 'pointer',
              }}
              onClick={toggleConfirmPasswordVisibility}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: '#fff',
              height: '48px',
              width: '100%',
              border: '2px solid rgb(13, 92, 182)',
              borderRadius: '4px',
              marginTop: '26px',
              marginBottom: '10px'
            }}
            textButton={'Đăng ký'}
            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '600' }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={ImageIn} preview={false} alt='image-in' height='203px' width='203px' />
          <h4 style={{ paddingTop: '6px' }}>Mua sắm tại DoobecoolShop</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
