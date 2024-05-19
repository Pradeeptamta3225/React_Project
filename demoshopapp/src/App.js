import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

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
      itemName: "Arial",
      itemDate: "15",
      itemMonth: "June",
      itemYear: "2020"
    },
    {
      itemName: "Ghadi",
      itemDate: "25",
      itemMonth: "Aug",
      itemYear: "2025"
    },
    {
      itemName: "Rin",
      itemDate: "05",
      itemMonth: "Nov",
      itemYear: "2005"
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
      <Card>
      <Item name={response[0].itemName} ></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      
      <Item name={response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      
      <Item name={response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      <Item name={response[3].itemName} ></Item>
      <ItemDate day={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemYear}></ItemDate>

      <Item name={response[4].itemName} ></Item>
      <ItemDate day={response[4].itemDate} month={response[4].itemMonth} year={response[4].itemYear}></ItemDate>

      <Item name={response[5].itemName} ></Item>
      <ItemDate day={response[5].itemDate} month={response[5].itemMonth} year={response[5].itemYear}></ItemDate>
      <div className="App">Hello Pradeep !How r u</div>
      </Card>
      
    </div>
    
  );
}

export default App;
