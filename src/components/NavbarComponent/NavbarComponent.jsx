import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'text': 
                return options.map((option) => {
                        return (
                            <WrapperTextValue>{option}</WrapperTextValue>
                        )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '12px'}} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        <Checkbox value="A">A</Checkbox>
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                       <div style={{display: 'flex', paddingTop: '4px', gap: '4px'}}>
                            <Rate style={{fontSize: '12px', display:'flex', justifyContent:'center', alignItems:'center'}} disabled defaultValue={option} />
                            <span> {`từ ${option} sao`}</span>    
                       </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                })
            default: 
                return {}
        }
    }
    return (
        <div>
            <WrapperLabelText>
                Label
            </WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'Tivi', 'Máy giặt'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B'}
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 4])}
            </WrapperContent>
            <WrapperContent style={{gap: '4px', marginTop:'8px'}}>
                {renderContent('price', ['Dưới 50.000', 'Từ 50.000 đến 500.000'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent