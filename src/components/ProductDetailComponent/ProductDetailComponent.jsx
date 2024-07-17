import { Col, Image, Row} from 'antd'
import React from 'react'
import imageProdcut from '../../assets/images/b2.webp'
import imageProductSmall from '../../assets/images/sm1.webp'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber} from './style'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
  } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
    const onChange = () => {}
  return (
    <Row style={{padding:'16px', background:'#fff', borderRadius:"4px"}}>
        <Col span={10} style={{borderRight:'1px solid #ccc', paddingLeft:'8px'}}>
            <Image src={imageProdcut} alt="image product" preview={false} />
            <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                
                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                  <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>Sách - Thám tử lừng danh Conan - Combo 10 tập từ 81 đến 90  </WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}} />  
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}} />  
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}} />  
                <WrapperStyleTextSell > | Đã bán 500+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Tổ 8. Thị trấn An Dương. TP Hải Phòng</span>-
                <span className='change-address'> Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{borderBottom:'1px solid #ccc', borderTop:'1px solid #ccc', marginTop:'12px', marginBottom:'12px'}}>
                <div>Số lượng: </div>
                <WrapperQualityProduct>
                    <button style={{border: 'none', background:'transparent'}}>
                        <PlusOutlined style={{color:'#000', fontSize:'20px'}}/>
                    </button>
                    <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size='small' />
                    <button style={{border:'none', background:'transparent'}}>
                        <MinusOutlined style={{color:'#000', fontSize:'20px'}}/>
                    </button>
                </WrapperQualityProduct>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <ButtonComponent
                    bordered={false}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '220px',
                        border: 'none',
                        boderRadius: '4px'
                    }}
                    textButton={'Chọn mua'}
                    styleTextButton={{color: '#fff', fontSize:'15px', fontWeight: '600'}}
                ></ButtonComponent>
                <ButtonComponent
                    bordered={false}
                    size={40}
                    styleButton={{
                        background: '#fff',
                        height: '48px',
                        width: '220px',
                        border: '2px solid rgb(13, 92, 182)',
                        boderRadius: '4px'
                    }}
                    textButton={'Mua trả sau'}
                    styleTextButton={{color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '600' }}
                ></ButtonComponent>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent