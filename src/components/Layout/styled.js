import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(var(--vh, 1vh) * 100);
`

export const MainWrapper = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 3%;

  ${media.lessThan("600px")`
    padding: 0 20px;
  `}
`