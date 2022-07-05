import React from 'react'
import Card from 'react-bootstrap/Card'

function Footer() {
  return (
    <div>
        <Card.Footer className="footer" >
            Follow Us On Social Media: 
            <br></br>
            <a  href='https://www.instagram.com/zaksbakeryy/'>
                 <img src='https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png' alt='instagram' className='social'></img>
            </a>
            <a href='https://www.facebook.com/zaksbakeryy/'>
                 <img src='https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/facebook_fb_face_book-1024.png' alt='facebook' className='social'></img>
            </a>
            <a href='https://www.tiktok.com/@zaksbakeryy'>
                <img src='https://cdn3.iconfinder.com/data/icons/social-media-2478/24/tiktok-1024.png' alt='tiktock' className='social'></img>
            </a>
        </Card.Footer>
    </div>
  )
}

export default Footer