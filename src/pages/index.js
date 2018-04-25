import React from "react"
import Form from './form'
import style from '../style/main.css'

export default () => <div className="container">
    <div className="main">
        <h1>Louis Vuitton Product Code Calculator</h1>
        <h2>Use this page to figure out where and when your bag was made!</h2>
        <h4>Notice: When buying bags on the secondhand market, make sure the details provided by the seller match the details of the date code. Checking the date code is an easy way to determine if a bag is fake, however this is not the only method. While this is a good start, seek the opinion of a professional evaluator whenin doubt.</h4>
        <p className="aside">*If you see Factory Code "AAS", this is a special order and not included in the calculator.</p>
        <Form />
 
    </div>
    <div className="secondary">
        <h4>Organize &amp; protect your bags:</h4>
        <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=unakravets-20&marketplace=amazon&region=US&placement=B074YHK42K&asins=B074YHK42K&linkId=3becd255fc56563e030472af1b5edf88&show_border=true&link_opens_in_new_window=true"></iframe>

        <h4>Keep them healthy &amp; happy:</h4>
        <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=unakravets-20&marketplace=amazon&region=US&placement=B00HU6N3LK&asins=B00HU6N3LK&linkId=980a5e5d7bda0e4b7c6bf92c7d534167&show_border=true&link_opens_in_new_window=true"/>
    </div>
</div>