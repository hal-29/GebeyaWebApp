import { PropTypes } from 'prop-types'

Wrapper.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
}

function Wrapper({ children, className }) {
   return (
      <div className={`mx-auto px-6 max-w-[1400px] ${className}`}>
         {children}
      </div>
   )
}

export default Wrapper
