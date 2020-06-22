import styled from '@emotion/styled'
import { css } from '@emotion/core'

const dynamicStyles = props =>
   css`
      background-color: #0886ff;
      color: white;
      padding: 6px;
   `

export const DefaultButton = styled.button`
   background-color: white;
   border-radius: 8px;
   width: 100%;
`

export const PrimaryButton = styled(DefaultButton)`
   ${dynamicStyles}
`
