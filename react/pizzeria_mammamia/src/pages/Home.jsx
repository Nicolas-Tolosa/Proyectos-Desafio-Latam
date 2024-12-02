import Header from '../pages/components/Header'
import articles from '../data/pizzas'
import CardPizza from '../components/CardPizza'


const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 grid-flow-row justify-items-center mx-auto md:mx-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-3 gap-3 mb-12" >
        {articles.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza}></CardPizza>
        ))}
      </div>
    </div>
  )
}

export default Home