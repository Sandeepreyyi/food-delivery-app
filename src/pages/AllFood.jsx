import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {
  orderFood,
  cartFood,
  removeCartFood,
  removeorderFood,
  selectedFood,
} from '../redux/actions/FoodActions';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux'; // Fixed the import path for useSelector
import backgroundImg from '..//asserts/backgroundImg.jpg'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState,useEffect} from 'react';
import FoodCatogories from './FoodCatogories';

const defaultTheme = createTheme();
const AllFood = () => {
  const foods = useSelector((state) => state.allFoods.foods?.data?.data);
  const orderfoodData = useSelector((state) => state.orderFood);
  const cartfoodData = useSelector((state) => state.cartfood);
  const navigate = useNavigate()
  
  console.log({ foods })
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState([]);
  const [isAddedtoCart, setIsAddedtoCart] = useState([]);
  useEffect(() => {
    const placedOrders = orderfoodData.orderfood.map((order) => order.id);
    setIsOrderPlaced(placedOrders);
  }, [orderfoodData.orderfood]);
  useEffect (()=>
  {
    const  cartAdd = cartfoodData.cartfood.map((carted)=> carted.id)
    setIsAddedtoCart(cartAdd);
  },[cartfoodData.cartfood])



  return (
    <div>

      <ThemeProvider theme={defaultTheme}>

        <CssBaseline />
        <AppBar position="relative">
          <img src={backgroundImg}
            alt="Background"
          />
        </AppBar>
        <main>

          <Box
            sx={{
              bgcolor: 'background.paper',
              pb: 0,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color='blue'
                gutterBottom

              >
                FOODS
                
              </Typography>
        
              <FoodCatogories/>
            </Container>
          </Box>
          
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {!foods? <div>Loading...</div> :
                foods.map((foodies) => {


                  const { id, itemName, img, category, price } = foodies;
                  const handleAddToCart = (foodies)=>{
                    dispatch(cartFood(foodies));
                
                  }
                  const handleRemoveToCart = (foodies)=>{
                    dispatch(removeCartFood(foodies));
                
                  }
                  const handleCancelOrder = () =>{
                    dispatch(removeorderFood(foodies))
                  }
                  const handlePlaceOrder = () => {
                    dispatch(orderFood(foodies));
                  };
                  const handleSelected = () => {
                    dispatch(selectedFood(foodies));
                    navigate(`/foodies/${id}`);
                  };
                  

                  return (
                    <Grid item key={id} xs={12} sm={6} md={4}>

                      
                        <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >


                          <CardMedia
                            component="div"
                            sx={{
                              // 16:9
                              pt: '2.25%',
                              '& img': {
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                              }
                            }}
                          ><img
                              src={img}
                            /></CardMedia>
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color:'blue'}}>
                              {itemName}
                            </Typography>
                            <Typography style={{color:'indigo'}}>
                              {category}
                            </Typography>
                            <Typography style={{color:'green'}}>
                             $ <span style={{color:'red'}}>{price}</span> 
                            </Typography>
                            
                          </CardContent>
                          <CardActions style={{display:'flex', justifyContent:'space-between'}}>
                          {/* <Link to={`/foodies/${id}`} style={{ textDecoration: 'none' }}> VIEW </Link> */}
                          <Button onClick={handleSelected}>view</Button>
                           <div>
                           {isAddedtoCart.includes(id) ? ( (<Button onClick={()=> handleRemoveToCart(foodies)} style={{color:'red'}}>RemoveCart</Button>)
                              )
                            : <Button onClick={()=> handleAddToCart(foodies)}>Cart</Button>
                            
                            
                            }
                           </div>
                          </CardActions>
                        <div>
                          {isOrderPlaced.includes(id) ? (
                            <Button onClick={handleCancelOrder} style={{ width: '100%', backgroundColor: 'red', color: 'white' }}>
                              Cancel Order
                            </Button>
                          ) : (
                            <Button onClick={handlePlaceOrder} style={{ width: '100%', backgroundColor: 'blueviolet', color: 'white' }}>
                              Add to Order
                            </Button>
                          )}
                        </div>

                        </Card>
                     
                    </Grid>
                  );
                })}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
    // <h1>hi</h1>
  );
};

export default AllFood;
