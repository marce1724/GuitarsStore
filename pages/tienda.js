import Layout from "../components/Layout";
import Listado from "../components/Listado";

const tienda = ({guitarras}) => {

    return (
        <div>
           <Layout
               pagina='Tienda Virtual'
           >
             <main className="contenedor">
                 <h1 className="heading">Nuestra Colección</h1>
                 <Listado
                      guitarras={guitarras}
                 />
             </main>
      
           </Layout>
        </div>
    )

}

export async function getServerSideProps(){
     const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
     const respuesta = await fetch(url)
     const guitarras = await respuesta.json()

     return{
         props :{
             guitarras
         }
     }
}

export default tienda;
