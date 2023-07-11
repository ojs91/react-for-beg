import Button from './Button';
import Cleanup from './Cleanup';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onChange = (e) => setKeyword(e.target.value)
  const onClick = () => setCounter((p) => p + 1) 
  console.log("i run all the time")
  useEffect(()=>{
    console.log("open api")
  },[])
  useEffect(() => {
    if(keyword !=="" && keyword.length >5){
      console.log("search", keyword)
    }
  }, [keyword])
  const dummyData = [
      {
        id: '1111',
        type: '구독',
        title: '프로페셔널 플러스',
        price: '77,000',
        date: '2023-04-27',
        purchaseStatus: '결제완료', 
        details: '상세보기URL'
      },
      {
        id: '1112',
        type: '구독', 
        title: '프로페셔널 플러스',
        price: '77,000',
        date: '2023-04-27',
        purchaseStatus: '결제완료', 
        details: '상세보기URL'
      },
      {
        id: '1113',
        type: '구독', 
        title: '베이직',
        price: '33,000',
        date: '2023-04-20',
        purchaseStatus: '결제완료', 
        details: '상세보기URL'
      },
      {
        id: '1114',
        type: '구독', 
        title: '베이직 플러스',
        price: '33,000',
        date: '2023-04-20',
        purchaseStatus: '결제완료', 
        details: '상세보기URL'
      },
      {
        id: '1115',
        type: '구독', 
        title: '베이직 플러스',
        price: '33,000',
        date: '2023-04-20',
        purchaseStatus: '결제완료', 
        details: '상세보기URL'
      },
    ]
  return (
    <div>
      <h1 className={styles.title}>
        Welcome back!!!
        <p onClick={onClick}>{counter}</p>
        <input value={keyword} type="text" placeholder='Search' onChange={onChange}/>
      </h1>
      <Button btnTxt={"버튼입니다"} />
      {/* <div>
        <ul style={{ listStyle: 'none' }}>
          {dummyData.map((v,i) => {
            console.log(v);
            console.log(i);
            return (
              <li className={styles.table} key={v.id}>
                <span>{v.type}</span>
                <span>{v.title}</span>
                <span>{v.price}</span>
                <span>{v.date}</span>
                <span>{v.purchaseStatus}</span>
                <a href={`url/${v.id}`}>상세보기</a>
              </li>
            );
          })}
        </ul>
      </div> */}

      <Cleanup />
    </div>
  );
}

export default App;
