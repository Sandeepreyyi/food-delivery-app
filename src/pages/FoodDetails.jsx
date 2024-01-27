import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  orderFood,
  cartFood,
  removeCartFood,
  removeorderFood,
} from '../redux/actions/FoodActions';

const FoodDetails = () => {
  const foodData = useSelector((state) => state.food);
  const orderfoodData = useSelector((state) => state.orderFood);
  const cartfoodData = useSelector((state) => state.cartfood);

  const { id, itemName, img, category, price, description } = foodData || {};

  // const params = useParams();
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOrderPlaced(orderfoodData.orderfood.some((order) => order.id === id));
  }, [orderfoodData.orderfood, id]);

  useEffect(() => {
    setIsAddedtoCart(cartfoodData.cartfood.some((carted) => carted.id === id));
  }, [cartfoodData.cartfood, id]);

  const handleAddToCart = () => {
    dispatch(cartFood(foodData));
  };

  const handleRemoveToCart = () => {
    dispatch(removeCartFood(foodData));
  };

  const handlePlaceOrder = () => {
    dispatch(orderFood(foodData));
  };

  const handleCancelOrder = () => {
    dispatch(removeorderFood(foodData));
  };

  // return (
  //   <div>
  //     <Typography
  //       sx={{
  //         marginTop: 2,
  //         color: 'red',
  //         fontSize: '40px',
  //       }}
  //     >
  //       FOOD DETAILS
  //     </Typography>
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <Card sx={{ display: 'flex', flexDirection: 'column', mb: 4, mt: 4 }}>
  //         <CardMedia component="img" src={img} alt={itemName} sx={{ height: '230px' }} />
  //         <CardContent sx={{ flexGrow: 1 }}>
  //           <Typography gutterBottom variant="h5" component="h2">
  //             {itemName}
  //           </Typography>
  //           <Typography>{category}</Typography>
  //           <Typography>$ {price}</Typography>
  //           <Typography>{description}</Typography>
  //         </CardContent>
  //         <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
  //           <Button onClick={() => navigate('/foodlisting')} style={{ textDecoration: 'none' }}>
  //             BACK
  //           </Button>
  //           <div>
  //             {isAddedtoCart ? (
  //               <Button onClick={handleRemoveToCart}>Remove Cart</Button>
  //             ) : (
  //               <Button onClick={handleAddToCart}>Add to Cart</Button>
  //             )}
  //           </div>
  //         </CardActions>
  //         <div>
  //           {isOrderPlaced ? (
  //             <Button onClick={handleCancelOrder} style={{ width: '100%', backgroundColor: 'red', color: 'white' }}>
  //               Cancel Order
  //             </Button>
  //           ) : (
  //             <Button onClick={handlePlaceOrder} style={{ width: '100%', backgroundColor: 'blueviolet', color: 'white' }}>
  //               Add to Order
  //             </Button>
  //           )}
  //         </div>
  //       </Card>
  //     </Box>
  //   </div>
  // );
  return (
    <div>
      <Typography
        sx={{
          marginTop: 2,
          color: 'red',
          fontSize: '40px',
        }}
      >
        FOOD DETAILS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card sx={{ display: 'flex', flexDirection: 'column', mb: 4, mt: 4,width:'500px' }}>
          <CardMedia component="img" src={img} alt={itemName} sx={{ height: '230px' }} />
          <CardContent sx={{ height: '150px', flexGrow: 1 ,marginBottom:'10px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{color:'blue'}}>
              {itemName}
            </Typography>
            <Typography style={{color:'indigo'}}>{category}</Typography>
            <Typography style={{color:'green'}}>$ <span style={{color:'red'}}>{price}</span> </Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button onClick={() => navigate('/foodlisting')} style={{ textDecoration: 'none' }}>
              BACK
            </Button>
            <div>
              {isAddedtoCart ? (
                <Button onClick={handleRemoveToCart} style={{color:'red'}}>Remove Cart</Button>
              ) : (
                <Button onClick={handleAddToCart}>Add to Cart</Button>
              )}
            </div>
          </CardActions>
          <div>
            {isOrderPlaced ? (
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
      </Box>
    </div>
  );

};

export default FoodDetails;

