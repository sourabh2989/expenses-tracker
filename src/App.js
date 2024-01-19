// import styled from '@emotion/styled';
import "./App.css";
import { Typography, styled, Box,} from "@mui/material";
import Balance from "./component/Balance";
import Expenses from "./component/Expenses";
import Newtranjection from "./component/Newtranjection";
import { useState } from "react";
import Transactions from "./component/Transactions";

const Header = styled(Typography)`
  margin: 0px 0;
  color: blue;npm start
  font-size: 40px;
`;

const Component = styled(Box)`
  display: flex;
  background:#fff;
  width:800px;
  padding:10px;
  border-radius:20px;
  margin:auto;
  &>div{
    height:70vh;
    width:50%;
    padding:10px;

  }
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "momos", amount: -20 },
    
  ]);
  return (
    <Box className="App">
      <Header>Expenses tracker</Header>
      <Component>
        <Box>
          <Balance  transactions={transactions}/>
          <Expenses transactions={transactions} />
          <Newtranjection setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions}  setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
