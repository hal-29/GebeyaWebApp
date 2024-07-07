import { PropTypes } from 'prop-types'

Wrapper.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
}

function Wrapper({ children, className }) {
   return (
      <div
         className={`mx-auto px-2 md:px-4 lg:px-6 max-w-[1400px] transition-all ${className}`}
      >
         {children}
      </div>
   )
}

export default Wrapper
