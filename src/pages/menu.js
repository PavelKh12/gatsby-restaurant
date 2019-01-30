import React from 'react'
import {PageHeader,Banner} from "../utils";
import menuImg from '../images/bcg/menuBcg.jpeg'
import Layout from '../components/layout'
import SEO from '../components/seo'

const MenuPage = () => (
    <Layout>
        <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]}/>
        <PageHeader img={menuImg}><Banner title='Eaty Meaty' subtitle='Super Yamy'/></PageHeader>
    </Layout>
)


export default MenuPage
