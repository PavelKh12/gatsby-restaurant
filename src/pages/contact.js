import React from 'react'
import {PageHeader,Banner} from "../utils";
import contactImg from '../images/bcg/contactBcg.jpeg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import menuImg from "../images/bcg/menuBcg.jpeg";

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]}/>
        <PageHeader img={contactImg}><Banner title='Contacts' subtitle='Super Contacts'/></PageHeader>
    </Layout>
)


export default ContactPage
