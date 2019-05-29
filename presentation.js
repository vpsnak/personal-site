import React from 'react'
import {graphql} from 'gatsby'
import styled from '@emotion/styled'
import {Deck, Heading, Slide, Text} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

const theme = {
  primary: `#127baa`,
  light: `#179ad4`,
  dark: `#0e6288`,
  accent: `#39329c`,
  text: `#d9e3ec`
}

const CreditText = styled.span({
  color: theme.dark,
  position: `absolute`,
  left: `.5em`,
  bottom: `.5em`,
  fontSize: `1.5rem`
})

const SpecialTitle = styled.div({
  color: theme.dark,
  position: `absolute`,
  right: `.5em`,
  top: `.5em`,
  fontWeight: `700`,
  fontSize: `2rem`
})

const MainTitle = styled.h1({
  color: '#dee8f1',
  fontWeight: `600`,
  fontSize: `3rem`,
  marginBottom: `3rem`
})

const WpContent = styled.div({
  fontSize: `2rem`,
  'ul': {
    'li': {
      textAlign: `left`,
      marginBottom: `1rem`,
      '&:before': {
        content: '"-"',
        display: `inline-block`,
        marginRight: `1rem`
      }
    }
  },
  'img': {
    objectFit: `contain`,
    width: `100%`,
    maxHeight: `55vh`
  },
  'p': {
    marginBottom: `2rem`
  }
})

const StyledSlide = styled(Slide)({
  textAlign: `left`
})

const customTheme = createTheme(
  {
    primary: theme.primary,
    secondary: theme.text,
    tertiary: theme.accent,
    quaternary: theme.dark
  },
  {
    primary: {
      name: 'Open Sans',
      googleFont: true,
      styles: ['400', '600', '700']
    },
    secondary: 'Helvetica'
  }
)

class Presentation extends React.Component {
  render() {
    const {data} = this.props

    const presentationSlides = data.presentation.edges

    const fillderSlides = [presentationSlides.length]

    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={customTheme}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit caps textColor="secondary">
            The Power Of Wordpress
          </Heading>
          <Text margin="10px 0 0" fit bold textColor="quaternary">
            Μία ομιλία για τις δυνατότητες του wordpress
          </Text>
        </Slide>
        {presentationSlides.length > 0 && presentationSlides.map((item, key) => {
          const slide = item.node
          return (
            <StyledSlide key={key} transition={['fade']} bgColor="primary">
              <MainTitle dangerouslySetInnerHTML={{__html: slide.title}} />
              <WpContent dangerouslySetInnerHTML={{__html: slide.content}} />
              {!fillderSlides.includes(key) && <SpecialTitle>Τι μπορείς να φτιάξεις με wordpress</SpecialTitle>}
              {!fillderSlides.includes(key) && <CreditText>Evangelos Pallis</CreditText>}
            </StyledSlide>
          )
        })}
      </Deck>
    )
  }
}

export default Presentation

export const presentationQuery = graphql`
  query presentationQuery($id: Int = 5){
    presentation: allWordpressWpSlides(filter: {presentations: {eq: $id}}, sort: {fields:menu_order}) {
      edges {
        node {
          id
          title
          content
          menu_order
        }
      }
    }
  }
`
