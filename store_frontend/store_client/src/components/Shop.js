import React from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridListTileBar, GridListTile, makeStyles, IconButton } from '@material-ui/core'
import ShopIcon from '@material-ui/icons/Shop';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'visable',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 900,
        height: 900,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

export default function Shop(props) {
    const classes = useStyles();
    return (
        <>
            <div className="page_wrapper">
                <nav>
                    <h3> Post New Product</h3>
                    <div className="sidebar">
                        <form onSubmit={props.handleSubmit}>
                            <fieldset className="product-info">
                                <legend>Product Info</legend>
                                <label htmlFor="name" id="name"  >
                                    Name:
                                    <input type="text" id="name" value={props.inputs.name} onChange={props.handleChange} />
                                </label>
                                <label htmlFor="brand" id="brand" >
                                    Brand:
                                        <input type="text" id="brand" value={props.inputs.brand} onChange={props.handleChange} />
                                </label>
                                <label htmlFor="price" id="price" >
                                    Price:
                                        <input type="text" id="price" value={props.inputs.price} onChange={props.handleChange} />
                                </label>
                            </fieldset>
                            <fieldset className="product-description">
                                <label htmlFor="product_img" id="product_img" >
                                    Image (required):
                                        <input type="url" id="product_img" value={props.inputs.product_img} onChange={props.handleChange} />
                                </label>
                                <legend>The Product</legend>
                                <label htmlFor="description" id="description" >
                                    description:
                                    <textarea id="description" placeholder="What is this all about?" value={props.inputs.description} onChange={props.handleChange} />
                                </label>
                            </fieldset>
                            <input type="submit" className="submit" />
                        </form>
                    </div>
                </nav>
                <div className="main">
                    <h1>Shop Now:</h1>
                    <div className={classes.root}>
                        <GridList
                            cellHeight={200}
                            spacing={1}
                            className={classes.gridList}
                        >
                            {props.products.map(product => {
                                return (
                                    <GridListTile key={product.product_img}>


                                        <img src={product.product_img} alt={product.name} herf={`/product/${product.id}`} />
                                        <GridListTileBar
                                            title={product.name}
                                            titlePosition="top"
                                            subtitle={`$ ${product.price}0`}
                                            actionIcon={
                                                <IconButton aria-label={`star ${product.name}`} className={classes.icon}>
                                                    <Link to={`${product.id}/product`}>
                                                        <ShopIcon />
                                                    </Link>
                                                </IconButton>
                                            }
                                            actionPosition="right"
                                            className={classes.titleBar}
                                        />

                                    </GridListTile>
                                )
                            })}

                        </GridList>
                    </div>
                </div>
            </div>
        </>
    )
}
