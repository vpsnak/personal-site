import React, {Component} from 'react'
import axios from 'axios';
import Fab from '@material-ui/core/Fab';

const API_PATH = './contact.php';

class Contact extends Component {
    state = {
        name: '',
        fname: '',
        lname: '',
        email: '',
        message: '',
    };

    handleFormSubmit(event) {
        // event.preventDefault();
        // console.log(this.state);
        // axios({
        //     method: 'post',
        //     url: `${API_PATH}`,
        //     headers: {'content-type': 'application/json'},
        //     data: this.state
        // })
        //     .then(result => {
        //         this.setState({
        //             mailSent: result.data.sent
        //         })
        //     })
        //     .catch(error => this.setState({error: error.message}));
    }

    render() {
        // const data = this.props.data.wordpressPage;

        return (
            <div>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={"js-form"}>
                    <p class="hidden" style={{display: `none`}}>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div className={"form-group"}>
                        <input type="text" id="name" className="form-field js-field-name" name="name" placeholder="Your name.."
                               value={this.state.name}
                               onChange={e => this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input type="email" id="email" className="form-field js-field-e-mail" name="email" placeholder="Your e-mail.."
                               value={this.state.email}
                               onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className={"form-group"}>
                        <textarea id="message" className="form-field js-field-message" name="message" placeholder="Type the message here"
                                  onChange={e => this.setState({message: e.target.value})}
                                  defaultValue={this.state.message}
                        />
                    </div>
                    <Fab variant="extended" onClick={e => this.handleFormSubmit(e)} className={"site-btn site-btn--form"} type="submit" value="Send">
                        Send
                    </Fab>
                    <div>
                        {this.state.mailSent &&
                        <div>Thanks for contacting me.</div>
                        }
                    </div>
                </form>
            </div>
        )
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
