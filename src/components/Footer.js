import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='home-footer'>
      <div className='footer-main'>
        <div className='footer-left'>
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <Link to='/'>About cribd</Link>
              </li>
              <li>
                <Link to='/'>Press</Link>
              </li>
              <li>
                <Link to='/'>Our Blog</Link>
              </li>
              <li>
                <Link to='/'>Join Our Team</Link>
              </li>
              <li>
                <Link to='/'>Contact us</Link>
              </li>
              <li>
                <Link to='/'>Invite Friends</Link>
              </li>
              <li>
                <Link to='/'>G ifts</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>
                <Link to='/'>Help/FAQ</Link>
              </li>
              <li>
                <Link to='/'>Accessibility</Link>
              </li>
              <li>
                <Link to='/'>Purchase help</Link>
              </li>
              <li>
                <Link to='/'>Adchoices</Link>
              </li>
              <li>
                <Link to='/'>Publisers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to='/'>Terms</Link>
              </li>
              <li>
                <Link to='/'>Privacy</Link>
              </li>
              <li>
                <Link to='/'>Copyright</Link>
              </li>
            </ul>
          </div>
          <div className='footer-social'>
            <h3>Social</h3>
            <ul>
              <li>
                <Link to='/'>
                  <i className='fa fa-instagram'></i>Instagram
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <i className='fa fa-twitter'></i>Twitter
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <i className='fa fa-facebook'></i>Facebook
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <i className='fa fa-pinterest'></i>pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-right'>
          <h3>Get Our Free Apps</h3>
          <Link to='/'>
            <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg' />
          </Link>
          <br />
          <Link to='/'>
            <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg' />
          </Link>
        </div>
      </div>
      <hr />
      <div className='footer-secondary'>
        <div className='footer-secondary-left'>
          <ul>
            <li>
              <Link to='/'>Books</Link>
            </li>
            <li>
              <Link to='/'>Audiobooks</Link>
            </li>
            <li>
              <Link to='/'>Magazines</Link>
            </li>
            <li>
              <Link to='/'>podcasts</Link>
            </li>
            <li>
              <Link to='/'>Sheet Music</Link>
            </li>
            <li>
              <Link to='/'>Documents</Link>
            </li>
            <li>
              <Link to='/'>Snapshoots</Link>
            </li>
            <li>
              <Link to='/'>Directory</Link>
            </li>
          </ul>
        </div>
        <div className='footer-secondary-right'>
          <span>Language: </span>
          <select name='language'>
            <option value='English'>English</option>
            <option value='Francais'>Francais</option>
            <option value='Portugues'>Portugues</option>
            <option value='Roman'>Roman</option>
            <option value='Italiano'>Italiano</option>
          </select>
          <span>
            <Link to='/'>Copyright © 2021 Scribd Inc.</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
