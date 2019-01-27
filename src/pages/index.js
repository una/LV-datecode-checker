import React from "react"
import Form from './form'
import style from '../style/main.css'
import {Helmet} from "react-helmet";

export default () => <div className="container">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Louis Vuitton Datecode Authenticator / Calculator</title>
        <meta name="description" content="A tool for checking Louis Vuitton date codes (also known as product codes) for authenticity. Do you want to check and see if that bag is real? Start by checking the date code. This is the place to help you authenticate your Louis Vuitton bag purchase from the second hand market."/>
        <meta name="keywords" content="Louis Vuitton, authenticate, authentic, date code, datecode, product code, code, product, date, checker, tool, handbags, authentication, authenticator, real, fake"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script dangerouslySetInnerHTML={{
        __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-8894892383863897",
          enable_page_level_ads: true
        });`
    }} />
    </Helmet>
    <div className="main">
        <h1>Louis Vuitton Product Code Calculator</h1>
        <h2>Louis Vuitton starting using product codes in the early 1980's. Use this page to figure out where and when your bag was made!</h2>
        <h4>Notice: When buying bags on the secondhand market, make sure the details provided by the seller match the details of the date code. Checking the date code is one way to determine if a bag is fake, however this is not the only method. While this is a good start, seek the opinion of a professional when in doubt. This site does not guarantee accuracy of results.</h4>
        <p className="aside">*If you see Factory Code "AAS", this is a special order and not included in the calculator.</p>
        <Form />
    </div>
    <ul className="secondary">
        <li>
            <h4>Organize &amp; protect your bags:</h4>
            <iframe scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=unakravets-20&marketplace=amazon&region=US&placement=B074YHK42K&asins=B074YHK42K&linkId=3becd255fc56563e030472af1b5edf88&show_border=true&link_opens_in_new_window=true"></iframe>
        </li>
        <li>
        <h4>Keep them healthy &amp; happy:</h4>
            <iframe scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=unakravets-20&marketplace=amazon&region=US&placement=B00HU6N3LK&asins=B00HU6N3LK&linkId=980a5e5d7bda0e4b7c6bf92c7d534167&show_border=true&link_opens_in_new_window=true"/>
        </li>
    </ul>
    <script dangerouslySetInnerHTML={{
        __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-36758177-11', 'auto');
            ga('send', 'pageview');`
    }} />
</div>