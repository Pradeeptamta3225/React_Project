import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {

  const response = [
    {
      itemName: "Nirma",
      itemDate: "10",
      itemMonth: "Feb",
      itemYear: "2000"
    },
    {
      itemName: "SurfExcel",
      itemDate: "20",
      itemMonth: "Mar",
      itemYear: "2010"
    },
    {
      itemName: "Tide",
      itemDate: "30",
      itemMonth: "April",
      itemYear: "2015"
    }
  ]
  return (
    <div>
      <Item name={response[0].itemName} ></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      
      <Item name={response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      
      <Item name={response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello Pradeep !</div>
    </div>
    
  );
}

export default App;
