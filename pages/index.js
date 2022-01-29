import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, cursos, entradas}) {


  return (
    <div>
       <Layout
           pagina='Inicio'
           guitarra={guitarras[8]}
       >  
          <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>
            <Listado
              guitarras={guitarras}
            />
          </main>

          <Curso
            cursos={cursos}
          />

          <section className="contenedor">
            <ListadoBlog
              entradas={entradas}
            />
          </section> 
       </Layout>
    </div>
  )
}

export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/Blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarra, resCursos, resBlogs] = await Promise.all([
     fetch(urlGuitarras),
     fetch(urlCursos),
     fetch(urlBlogs)
  ])

  const [guitarras, cursos, entradas] = await  Promise.all([
      resGuitarra.json(),
      resCursos.json(),
      resBlogs.json()

  ])

  return{
      props :{
          guitarras,
          cursos,
          entradas
      }
  }
}


