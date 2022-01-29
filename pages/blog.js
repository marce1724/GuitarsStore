import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const blog = ({entradas}) => {
     
    return (
        <div>
           <Layout
               pagina='Blog'
           >
             <main className="contenedor">
                  <ListadoBlog
                     entradas={entradas}
                  />
             </main>
           </Layout>
        </div>
    )

};


export async function getStaticProps(){

     const url = `${process.env.API_URL}/Blogs?_sort=created_at:desc`
     const respuesta = await fetch(url)
     const entradas = await respuesta.json()

    return {
         props: {
             entradas   
         }
    }
}

export default blog;
