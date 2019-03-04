import React, {Component} from "react"
// import Link from 'gatsby-link'
import {StaticQuery, graphql} from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/Layout/Header"
import axios from 'axios';

const API_PATH = 'http://localhost:8000/contact.php';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
        }
    }

    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    }

    render() {
        const data = this.props.data.wordpressPage;

        return (
            <div>
                <Header/>
                <form action="#" >
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."
                           value={this.state.fname}
                           onChange={e => this.setState({ fname: e.target.value })}
                    />
                    <label>Last Name</label>
                    <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
                           value={this.state.lname}
                           onChange={e => this.setState({ lname: e.target.value })}
                    />


                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email"
                           value={this.state.email}
                           onChange={e => this.setState({ email: e.target.value })}
                    />


                    <label>Message</label>
                    <textarea id="message" name="message" placeholder="Write something.."
                              onChange={e => this.setState({ message: e.target.value })}
                              value={this.state.message}
                    >message</textarea>
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    <div>
                        {this.state.mailSent &&
                        <div>Thank you for contcting us.</div>
                        }
                    </div>
                </form >
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
          query($slug: String = "contact") {
            wordpressPage(slug: { eq: $slug }) {
              title
              content
              date(formatString: "MMMM DD, YYYY")
            }
          }
    `}
        render={data => <Contact data={data} {...props} />}
    />
)

Contact.propTypes = {
    data: PropTypes.isRequired,
};

// export default Contact