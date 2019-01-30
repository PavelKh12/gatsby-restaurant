import React, {Component} from 'react';
import {Section, Title, SectionButton} from "../../utils";
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'

class QuickInfo extends Component {
    render() {
        return (
            <Section><Title message='let us tell you about us' title='our mission'/>
                <QuickInfoWrapper>
                    <p className="text">
                        Lorem lOREM Lorem lOREM Lorem lOREMS
                    </p>
                    <Link to="/about/" style={{textDecoration: 'none'}}>
                        <SectionButton style={{margin: '2rem auto'}}>about</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        );
    }
}

const QuickInfoWrapper = styled.div`
width: 90%;
margin: 2rem auto;
.text {
line-height: 2rem;
color:${styles.colors.mainGrey};
word-spacing: .2rem;
}

@media (min-width: 768px) {
width: 70%;
}

@media (min-width: 992px) {
width: 60%;
}


`


export default QuickInfo;