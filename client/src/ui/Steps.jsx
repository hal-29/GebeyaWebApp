function Steps({ current, steps }) {
   return (
      <ul className='steps  lg:steps-horizontal'>
         {steps.map((step, i) => (
            <li key={step} className={`step ${i < current && 'step-primary'}`}>
               {step}
            </li>
         ))}
      </ul>
   )
}
export default Steps
