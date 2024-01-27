import React ,{useState, useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {
  removeorderFood,
  orderFood,
  cartFood,
  removeAllOrderFood,
  decreaseOrderFood,
  orderConform,
  removeCartFood,
  selectedFood

} from '../redux/actions/FoodActions';
import backgroundImg from '../asserts/backgroundImg.jpg';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';



const Orders = () => {
  const cartfoodData = useSelector((state) => state.cartfood);
  const orderfoodData = useSelector((state) => state.orderFood);
  const ordereddata = orderfoodData.orderfood;
  const [isAddedtoCart, setIsAddedtoCart] = useState([]);
  
  const dispatch = useDispatch();
  const navigate= useNavigate()
  useEffect (()=>
  {
    const  cartAdd = cartfoodData.cartfood.map((carted)=> carted.id)
    setIsAddedtoCart(cartAdd);
  },[cartfoodData.cartfood])
  const handleconformOrders = () =>
  {
    dispatch(orderConform(ordereddata));
    setTimeout(() => {
      navigate('/foodlisting');
    }, 3000);
  }
  const handleAllRemoveOrders = () => {
    dispatch(removeAllOrderFood(ordereddata))
    
  };
  const handleDecOrders = (foodies)=>{
    dispatch(decreaseOrderFood(foodies))

  }

  const handleRemoveOrder = (foodies) => {
    dispatch(removeorderFood(foodies));
  };

  const handleAddToCart = (foodies) => {
    dispatch(cartFood(foodies));
  };

  const handleIncOrder = (foodies) => {
   
    dispatch(orderFood(foodies));
  };
  const handleRemoveToCart = (foodies)=>{
    dispatch(removeCartFood(foodies));

  }
 

  return (
    <div>
      <AppBar position="relative">
        <img src={backgroundImg} alt="Background" />
      </AppBar>
      <div>
        <h1 style={{ marginTop: '30px', marginBottom: '0' }}>ORDERS</h1>
      </div>
      <div className="container">
        {orderfoodData.orderfood.length === 0 ? (
          <div style={{ height: '600px', marginTop: '10px' }}>
            <p>No Orders</p>
            <Link to="/foodListing" style={{ textDecoration: 'none' }}>
              <i className="ri-arrow-left-fill">Go and Shop Your Food</i>
            </Link>
          </div>
        ) : (
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {orderfoodData.orderfood ? (
                orderfoodData.orderfood.map((foodies) => {
                  const { id, itemName, img, category, price, quantity } = foodies;
                  const handleSelected = () => {
                    dispatch(selectedFood(foodies));
                    navigate(`/foodies/${id}`);
                  };

                  return (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: 4,
                          borderRadius: 8,
                        }}
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
                          <Typography gutterBottom variant="h5" component="h2" style={{ color: 'rebeccapurple' }}>
                            {itemName}
                          </Typography>
                          <Typography>{category}</Typography>
                          <Typography style={{ color: 'rebeccapurple' }}>
                            $ <span style={{ color: 'red' }}>{price}</span>
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Button onClick={() => handleIncOrder(foodies)}>
                            <i className="ri-add-line"></i>
                          </Button>
                          {quantity}
                          <Button onClick={()=>handleDecOrders(foodies)}>
                            <i className="ri-subtract-line"></i>
                          </Button>
                        </CardActions>

                        <CardActions
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Button onClick={handleSelected}>view</Button>
                          <div>
                           {isAddedtoCart.includes(id) ? ( (<Button onClick={()=> handleRemoveToCart(foodies)}>RemoveCart</Button>)
                              )
                            : <Button onClick={()=> handleAddToCart(foodies)}>Cart</Button>
                            
                            
                            }
                           </div>
                        </CardActions>
                        <div>
                          <Button
                            onClick={() => handleRemoveOrder(foodies)}
                            style={{ width: '100%', backgroundColor: 'blueviolet', color: 'white' }}
                          >
                            Remove Order
                          </Button>
                        </div>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <div>Loading...</div>
              )}
            </Grid>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '0%',
                marginTop: '50px',
              }}
            >
               <Button onClick={handleconformOrders} style={{ color: 'white', backgroundColor:'green', }}>
                <span style={{  }}>Order</span>
              </Button>

              <Button onClick={handleAllRemoveOrders} style={{ color: 'white', backgroundColor:'red', }}>
                <span style={{  }}>Cancel All Food Orders</span>
              </Button>
              
              <Typography>
                Total Food Cost :<span style={{ color: 'red' }}>${orderfoodData.orderTotalAmount}</span>
                <div>
                  <Link to="/foodListing" style={{ textDecoration: 'none', marginTop: '0' }}>
                    <i className="ri-arrow-left-fill">Continue your's Shopping</i>
                  </Link>
                </div>
              </Typography>
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Orders;
