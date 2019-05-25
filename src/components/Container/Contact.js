import React, {Component} from 'react'
import styled from '@emotion/styled'
import Fab from '@material-ui/core/Fab'

function encode(data) {
  return Object.keys(data)
               .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
               .join('&')
}

const Form = styled.form({
  width: `100%`
})

const FormGroup = styled.div({
  marginBottom: `15px`,
  position: `relative`
})

const FormInput = styled.input({
  width: `100%`
})

const FormTextArea = styled.textarea({
  width: `100%`
})

class Contact extends Component {
  state = {}

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => {
        this.setState({
          mailSent: true
        })
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <FormGroup>
        <Form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={this.handleSubmit}
          className={'js-form'}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <FormGroup>
            <FormInput type="text" id="name" name="name" placeholder="Your name.."
                       value={this.state.name}
                       onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormInput type="email" id="email" className="form-field js-field-e-mail" name="email" placeholder="Your e-mail.."
                       value={this.state.email}
                       onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormTextArea id="message" className="form-field js-field-message" name="message" placeholder="Type the message here"
                          onChange={this.handleChange}
                          defaultValue={this.state.message}
            />
          </FormGroup>
          <Fab variant="extended" className={'site-btn site-btn--form'} type="submit" value="Send">
            Send
          </Fab>
          <div>
            {this.state.mailSent &&
            <div>Thanks for contacting me.</div>
            }
          </div>
        </Form>
      </FormGroup>
    )

    // const data = this.props.data.wordpressPage;
  }
}

export default Contact

// export default props => (
//     <StaticQuery
//         query={graphql`
//           query($slug: String = "contact") {
//             wordpressPage(slug: { eq: $slug }) {
//               title
//               content
//               date(formatString: "MMMM DD, YYYY")
//             }
//           }
//     `}
//         render={data => <Contact data={data} {...props} />}
//     />
// )

// Contact.propTypes = {
//     data: PropTypes.isRequired,
// };
