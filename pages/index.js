import Layout from '../components/layout'
import { api } from '../commons/functions'
import axios from 'axios'

export default function Home ({ results }) {
  return (
    <Layout
      title="Mercado Libre"
      description="Pagina de practica de mercado libre"
      results={results}
    ></Layout>
  )
}

export async function getStaticProps (searchValue) {
  try {
    const { data } = await axios.get(api(searchValue))
    // console.log(data.results);
    console.log(data)

    return {
      props: {
        results: data.results
      }
    }
  } catch (error) {
    console.log(error)
  }
}
