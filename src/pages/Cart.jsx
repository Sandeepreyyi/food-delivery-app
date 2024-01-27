
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {
  decreaseCartFood,
  orderFood,
  cartFood,
  removeCartFood,
  removeAllCartFood,
  removeorderFood,
  selectedFood
} from '../redux/actions/FoodActions';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import backgroundImg from '../asserts/backgroundImg.jpg';

const Cart = () => {
  const cartfoodData = useSelector((state) => state.cartfood);
  const orderfoodData = useSelector((state) => state.orderFood);
  const carts = cartfoodData.cartfood;
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState([]);
  const navigate = useNavigate()

  const handleAllRemoveToCart = () => {
    dispatch(removeAllCartFood(carts));
  };

  useEffect(() => {
    const placedOrders = orderfoodData.orderfood.map((order) => order.id);
    setIsOrderPlaced(placedOrders);
  }, [orderfoodData.orderfood]);

  return (
    <div>
      <AppBar position="relative">
        <img src={backgroundImg} alt="Background" />
      </AppBar>
      <div>
        <h1 style={{ marginTop: '30px', marginBottom: '0' }}>CART</h1>
      </div>
      <div className="container">
        {carts.length === 0 ? (
          <div style={{ height: '600px', marginTop: '10px' }}>
            <p>Your Cart is Empty</p>
            <Link to="/foodListing" style={{ textDecoration: 'none' }}>
              <i className="ri-arrow-left-fill">Go and Shop Your Food</i>
            </Link>
          </div>
        ) : (
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {!carts ? (
                <div>Loading...</div>
              ) : (
                carts.map((foodies) => {
                  const { id, itemName, img, category, price, quantity } = foodies;

                  const handleRemoveToCart = () => {
                    dispatch(removeCartFood(foodies));
                  };

                  const handleAddToCart = () => {
                    dispatch(cartFood(foodies));
                  };

                  const handleDecCart = () => {
                    dispatch(decreaseCartFood(foodies));
                  };

                  const handlePlaceOrder = () => {
                    dispatch(orderFood(foodies));
                  };
                  const handleCancelOrder = () =>{
                    dispatch(removeorderFood(foodies))
                  }
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
                          <Button onClick={handleAddToCart}>
                            <i className="ri-add-line"></i>
                          </Button>
                          {quantity}
                          <Button onClick={handleDecCart}>
                            <i className="ri-subtract-line"></i>
                          </Button>
                        </CardActions>
                        <CardActions
                          style={{
                            display: 'flex',
                            justifyContent:'space-around',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Button onClick={handleSelected}>view</Button>
                          <Button onClick={handleRemoveToCart} style={{}}>Remove from cart</Button>
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
                })
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
              <Button onClick={handleAllRemoveToCart}>
                <span style={{ color: 'red' }}>Remove All Food Items</span>
              </Button>
              <Typography>
                Total Food Cost :<span style={{ color: 'red' }}>${cartfoodData.cartTotalAmount}</span>
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

export default Cart;


