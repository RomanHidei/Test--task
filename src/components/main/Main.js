import { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import New from './New'
import Product from '../product/Product'

export default class Main extends Component {
    render() {
        return (
            <>
                <New />
                <Grid container spacing={4} mg={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product article='Product 1' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product article='Product 2' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product article='Product 3' />
                    </Grid>
                </Grid>

            </>
        )
    }
}