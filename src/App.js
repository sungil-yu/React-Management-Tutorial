import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './compnents/Customer'

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' :"홍길동",
  'birthday' : '951006',
  'gender' : '남자',
  'job' : '학생'

},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' :"이순신",
  'birthday' : '942006',
  'gender' : '남자',
  'job' : '대장'

},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' :"을지문덕",
  'birthday' : '913006',
  'gender' : '남자',
  'job' : '시민'

}

]

class  App extends React.Component {

  render(){

      return (
        <div>
          {customers.map(c => { return ( <Customer key = {c.id} id = {c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
        </div>
            );
          }
}
export default App;
