// import { Box } from "@mui/material"
import { Typography, styled,Box ,Card ,CardContent} from '@mui/material';
// import { red } from '@mui/material/colors';
// import Transaction from './Transaction';
// import Transactions from './Transactions';



const Container =styled(Box)`
display:flex;
& > div {
    flex:1;
    padding:10px;
}
`

const Expenses =( {transactions})=>{

    const amount=transactions.map(transactions=>transactions.amount);
    const income= amount.filter(item=>item>0).reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const expenses= (amount.filter(item=>item<0).reduce((acc,item)=>(acc +=item),0)* -1).toFixed(2);

    return(
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{color:"green"}}> ₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expenses</Typography>
                    <Typography style={{color:"red"}}> ₹{expenses}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}
export default Expenses;