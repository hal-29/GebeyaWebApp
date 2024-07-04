import { PropTypes } from 'prop-types'

Wrapper.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
}

function Wrapper({ children, className }) {
   return (
      <div
         className={`mx-auto px-6 max-w-[1400px] transition-all ${className}`}
      >
         {children}
      </div>
   )
}

export default Wrapper
