import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'

const NotFoundPage = ({ props }) => {
    return (
        <Grid container
            direction="column"
            justify="center"
            className="full"           >
            <div className="highlight">
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="center">
                    <Grid item >
                        <IconContext.Provider value={{ size: "6em" }}>
                            <WiRain />
                        </IconContext.Provider>
                    </Grid>
                    <Grid item container
                        xs={12}
                        justify="center"
                        alignItems="center">
                        <Typography variant="h4" color="inherit">
                            404 | La página no existe
                    </Typography>
                    </Grid>
                    <Link color="inherit"
                        aria-label="menu"
                        component={RouterLink}
                        to="/main">
                        Volver al inicio
                    </Link>
                </Grid>
            </div>
        </Grid>
    )
}

export default NotFoundPage
