import './whatGPT.css'
import Features from '../features/Features'

const contentP = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
const charBoxContent = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
const knowledgeContent = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
const educationContent = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

const WhatIsGPT = () => {
  return (
    <section className='what-is-GPT-section'>
      <Features title='What is GPT-3' content={contentP} name='meaning-gpt'/>
      <div className="possibility-text">
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt-function" >
        <Features title='Chatbot' content={charBoxContent} />
        <Features title= 'Knowledge base' content={knowledgeContent} />
        <Features title='Education' content={educationContent}/>
      </div>
    </section>
  )
}

export default WhatIsGPT
