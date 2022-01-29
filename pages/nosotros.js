import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
      <div>
         <Layout
             pagina='Nosotros'
         >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                   <Image layout="responsive" width={600} height={400} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>
                    <div>
                       <p>Nulla porta accumsan odio, a interdum dolor venenatis vitae. Duis et consequat tellus. Suspendisse est nulla, consectetur pretium leo ut, 
                         ultrices aliquam magna.Sed cursus sem eget consectetur placerat. Donec eget tellus suscipit, bibendum nisl id, lobortis est. 
                         Sed ut ante euismod, euismod erat sit amet, eleifend elit. Duis interdum sem eget elit blandit, sed posuere tellus condimentum.
                         Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam imperdiet nunc vel convallis blandit. Duis a dictum leo.
                         Donec vel vestibulum nibh. 
                       </p>
                       <p>Nulla porta accumsan odio, a interdum dolor venenatis vitae. Duis et consequat tellus. Suspendisse est nulla, consectetur pretium leo ut, 
                         ultrices aliquam magna. Sed cursus sem eget consectetur placerat. Donec eget tellus suscipit, bibendum nisl id, lobortis est. 
                         Sed ut ante euismod, euismod erat sit amet, eleifend elit. Quisque ornare elementum nisi id consequat. Donec ac fringilla lacus.
                         Donec elit diam, accumsan eu pharetra vitae, viverra ac leo. 
                       </p>
                    </div>
                </div>
            </main>
              
         </Layout>
      </div>
  )

};

export default Nosotros;
