import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetchProducts from '../api/products';
import {useAsync} from 'react-async';
import useBasket from '../hooks/useBasket';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const loadProducts = async () => fetchProducts();

export default function Album() {
  const classes = useStyles();
  const {data, error, isLoading} = useAsync({promiseFn: loadProducts});
  const {addProduct} = useBasket();
  if (isLoading) return <React.Fragment>Loading...</React.Fragment>;
  if (data)
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {data.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.imageUrl}
                      title={product.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                      </Typography>
                      <Typography>{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Price: {product.price} zł
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => addProduct(product)}
                      >
                        Add to basket
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  else if (error)
    return (
      <React.Fragment>{`Something went wrong: ${error.message}`}</React.Fragment>
    );
  else return <React.Fragment>Please try again</React.Fragment>;
}
