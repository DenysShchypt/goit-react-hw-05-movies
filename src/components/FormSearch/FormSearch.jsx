import { SearchBtn, SearchForm, SearchInput } from "./FormSearch.styled"

const FormSearch = ({handleSubmit}) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
    <SearchInput type="text" name='query'  />
    <SearchBtn type='submit'>Search</SearchBtn>
    </SearchForm>
  )
}

export default FormSearch