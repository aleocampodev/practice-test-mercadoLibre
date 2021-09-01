import { useState } from "react";
import Head from "next/head";

const Layout = ({ title, description, children, data }) => {
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const saveData = () => {
    console.log("hola");
  };

  console.log(data);
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
      <header className="bg-warning " style={{ height: "80px" }}>
        <div className="input-group p-3">
          <input
            type="search"
            className="form-control"
            placeholder="Nunca dejes de buscar"
            aria-label="Nunca dejes de buscar"
            aria-describedby="basic-addon2"
            value={valueInput}
            onChange={handleChange}
            onClick={saveData}
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
