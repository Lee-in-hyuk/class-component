import Hello from './components/Hello';
import './App.css';
import Counter from './components/Counter';
import Customer from './components/Customer';

function App() {
  const customers = [{
    id:1,
    image: "https://placeimg.com/64/64/any",
    name: "성시원",
    birthday: "1997.01.01",
    gender: "여성",
    job: "방송국 막내 스태프"
  },
  {
    id:2,
    image: "https://placeimg.com/64/64/any",
    name: "윤윤재",
    birthday: "1997.01.01",
    gender: "남성",
    job: "변호사"
  },
  {
    id:3,
    image: "https://placeimg.com/64/64/any",
    name: "성동일",
    birthday: "1963.01.01",
    gender: "남성",
    job: "야구 감독"
  }
]
  return (
    <div className="App">
      <Hello  color="red"/>
      <hr/>
      <Counter/>
      <hr/>
      {
        customers.map(customer=>{
          return(
            <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
          )
        })
      }
      
    </div>
  );
}

export default App;
