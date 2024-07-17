import React from 'react'
import { WrapperReportText, StyleNameProduct, WrapperPriceText, WrapperDiscountText, WrapperCardStyle, WrapperImageStyle, WrapperStyleTextSell } from './style';
import {StarFilled} from '@ant-design/icons'
import logo from '../../assets/images/official.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding: '10px'}}
        cover={<img style={{borderRadius:'3px'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <WrapperImageStyle src={logo} />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>4.96</span>
                <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
            </span>
            <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight:'8px'}}>21.000.000</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent