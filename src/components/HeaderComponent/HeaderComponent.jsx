import React from 'react'
import { Badge, Col} from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined 
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
        <WrapperHeader>
            <Col span={6}>
                <WrapperTextHeader>DOOBECOOLSHOP</WrapperTextHeader>
            </Col>
            <Col span={12}>
                <ButtonInputSearch
                    size = "large"
                    textButton = "Tìm kiếm"
                    placeholder="input search text" enterButton 
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '35px', paddingLeft: '20px'}}/>
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăngký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>
                                Tài khoản
                                <CaretDownOutlined />
                            </WrapperTextHeaderSmall>
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <Badge count={4} size="small">
                        <ShoppingCartOutlined style={{fontSize: '35px', color: '#fff', display:'grid'}} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent