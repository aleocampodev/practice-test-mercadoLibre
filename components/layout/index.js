import { useState, useEffect } from 'react'
import Head from 'next/head'
import { DelayInput } from 'react-delay-input'
import axios from 'axios'
import { api } from '../../commons/functions'

const status = {
  idle: 'idle',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed'
}

const fetcher = (url) => axios.get(url).then((res) => res.data)

const Layout = ({ title, description, children, results }) => {
  const [valueInput, setValueInput] = useState('')
  const [searchStatus, setSearchStatus] = useState({
    status: status.idle,
    data: null
  })
  const { data, error } = useSWR(api(valueInput), fetcher)

  const handleChange = async (e) => {
    console.log('hola teacher')
    e.preventDefault()
  }

  /* useEffect(() => {
    results.filter((result, index) => console.log(result.id, "holi"));
  }, [valueInput]); */

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <header className="bg-warning " style={{ height: '80px' }}>
        <div className="input-group p-3">
          <DelayInput
            type="search"
            className="form-control"
            placeholder="Nunca dejes de buscar"
            aria-label="Nunca dejes de buscar"
            aria-describedby="basic-addon2"
            value={valueInput}
            onChange={(e) => {
              setValueInput(e.target.value)
            }}
            delayTimeout={300}
          />
          <button
            className="input-group-text"
            id="basic-addon2"
            onClick={handleChange}
          >
            <i className="fas fa-search"></i>
          </button>
          <p>Value: {valueInput}</p>
        </div>
      </header>
      {searchStatus.status === status.failed
        ? (
        <div>
          <p>Error</p>
          <button onClick={handleChange}>Cargar de nuevo</button>
        </div>
          )
        : null}
      {searchStatus.status === status.loading
        ? (
        <div>
          <p>Cargando</p>
        </div>
          )
        : null}
      {searchStatus.status === status.loading
        ? (
        <div>
          <p>Yupi :D</p>
        </div>
          )
        : null}
      <main>{children}</main>
    </div>
  )
}

export default Layout
