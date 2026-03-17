import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export default function PrintButton() {
  return (
    <button className="print-btn" onClick={() => window.print()} aria-label="Print resume">
      <FontAwesomeIcon icon={faPrint} />
    </button>
  )
}
