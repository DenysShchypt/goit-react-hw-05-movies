
const FormSearch = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" name='query'  />
    <button type='submit'>Search</button>
    </form>
  )
}

export default FormSearch