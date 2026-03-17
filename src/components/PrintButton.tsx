import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function PrintButton() {
  return (
    <button className="print-btn" onClick={() => window.print()} aria-label="Save resume as PDF">
      <FontAwesomeIcon icon={faFileArrowDown} />
    </button>
  )
}
