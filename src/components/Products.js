import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Products(props) {
    // list all the products that belong to the
    // current selected category

    // only show the products that belong to the current category

    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(
                <Card key={i}>
                    <CardActionArea>
                        <CardMedia
                            className='product-media'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.products[i].name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.products[i].price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.products[i].description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Add To Cart
  </Button>
                        <Button size="small" color="primary">
                            View Details
  </Button>
                    </CardActions>
                </Card>
            );
    }



    return (
        <><div className='main-product'>
            <h2>Products</h2>
            {productsHTML}
        </div>
        </>
    );
}

// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentCategory: state.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);
