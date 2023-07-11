import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
function Coinlist() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((respons) => respons.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
    
  },[])
  const [money, setMoney] = useState([]);
  const [click, setClick] = useState(false);
  const onChange = (e) => setMoney(e.target.value);
  const onClick = (e) => {
    console.log()
    const mmyy = 
    setClick(true);
    console.log(money)
    console.log(click)
  }
  return (
    <div>
      <h1>The Coins! ({loading ? 0 : coins.length})</h1>
      <input className="money" onChange={onChange} type="text" />
      <button onClick={onClick}>to Coin</button>
      
      {loading ? <strong>loading.....</strong> :
        <ul>
          {
            coins.map((v,i) => {
              if(click === false){
                return <li key={i}>{v.name} ({v.symbol}): {v.quotes.USD.price} USD</li>
              }else{
                return <li key={i}>
                  {v.name} ({v.symbol}): {money / ((v.quotes.USD.price)*1300) } {v.symbol}
                </li>
              }
              
            })
          }
        </ul>
      }
      
    </div>
  );
}

export default Coinlist;
