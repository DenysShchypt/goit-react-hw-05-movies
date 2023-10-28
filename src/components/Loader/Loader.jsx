import { MagnifyingGlass } from  'react-loader-spinner'

const Loader = () => {
  return (
<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#af2323'
/>
  )
}

export default Loader