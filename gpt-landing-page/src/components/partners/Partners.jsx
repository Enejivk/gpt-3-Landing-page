import atlassian from '../../assets/atlassian.png'
import slack from '../../assets/slack.png'
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'
import dropbox from '../../assets/dropbox.png'
import './partners.css'

const Partners = () => {
  return (
    <section className='partners-logo'>
      <img src={google} alt="" />
      <img src={atlassian} alt="" />
      <img src={slack} alt="" />
      <img src={dropbox} alt="" />
      <img src={shopify} alt="" />
    </section>
  )
}

export default Partners
