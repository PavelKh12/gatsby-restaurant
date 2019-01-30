import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {HomeHeader, Banner, BannerButton} from "../utils";
import QuickInfo from '../pages/HomePageComponents/QuickInfo'
import img  from '../images/bcg/homeBcg.jpeg'
import Gallery from "./HomePageComponents/Gallery-1";


const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <HomeHeader img={img}><Banner title="eatery" subtitle="Welcome to this place"><BannerButton style={{margin: '2rem auto'}}>menu</BannerButton></Banner></HomeHeader>
        <QuickInfo/>
        <Gallery/>
    </Layout>
)


export default IndexPage
