import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

export const WrapperTypeProduct = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
`
export const WrapperButtonMore = styled(ButtonComponent)`   
    &:hover {
        color: #fff !important;
        background-color: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }  
`
export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`