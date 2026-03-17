import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSquarePhone, faSquareEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { summary } from '../constants'

export default function AppHeader() {
  return (
    <div className="top-container">
      <div className="left">
        <div className="name">Gavin Chan</div>
        <div className="summary">{summary}</div>
        <div className="education">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <div>B.Sc., Statistics, The Chinese University of Hong Kong, 2015-2019</div>
        </div>
      </div>

      <div className="right">
        <div className="contact">
          <div className="item">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <div className="description">
              <a href="https://linkedin.com/in/gavinchandevelop">linkedin.com/in/gavinchandevelop</a>
            </div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <div className="description">
              <a href="https://github.com/gavindevelop4">github.com/gavindevelop4</a>
            </div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faSquareEnvelope} className="icon" />
            <div className="description">
              <a href="mailto:gavindevelop4@gmail.com">gavindevelop4@gmail.com</a>
            </div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faSquarePhone} className="icon" />
            <div className="description">437-557-3979</div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div className="description">North York, Ontario</div>
          </div>
        </div>
      </div>
    </div>
  )
}
