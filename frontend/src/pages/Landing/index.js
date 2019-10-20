import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import React, { useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Logo from '../../images/logo-stack-underflow.jpg'

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        flexGrow: 1,
        flex: '1 0 100%'
    },
    hero: {
        height: '100%',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(4)
    },
    title: {
        letterSpacing: '.7rem',
        textIndent: '.7rem',
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only('xs')]: {
            fontSize: 24,
            letterSpacing: '.1em',
            textIndent: '.1rem'
        },
        whiteSpace: 'nowrap'
    },
    h5: {
        paddingLeft: theme.spacing(1) * 4,
        paddingRight: theme.spacing(1) * 4,
        marginTop: theme.spacing(1),
        maxWidth: 600,
        textAlign: 'center',
        [theme.breakpoints.only('xs')]: {
            fontSize: 18
        }
    },
    content: {
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(1)
        }
    },
    button: {
        marginTop: theme.spacing(1) * 3
    },
    logo: {
        margin: `${theme.spacing(1) * 3}px 0 ${theme.spacing(1) * 4}px`,
    },
    steps: {
        maxWidth: theme.spacing(1) * 130,
        margin: 'auto'
    },
    step: {
        padding: `${theme.spacing(1) * 3}px ${theme.spacing(1) * 2}px`
    },
    stepIcon: {
        marginBottom: theme.spacing(1)
    },
    markdownElement: {},
    cardsContent: {
        padding: 15,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            padding: 0,
            paddingTop: 15
        }
    },
    card: {
        minWidth: 275,
        maxWidth: 450,
        margin: 15,
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            margin: 0,
            marginTop: 7
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    cardTitle: {
        marginBottom: 16,
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
})

const LandingPage = ({ classes, history, theme }) => {

    return (
        <div className={classes.main}>
        <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
    <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
    <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
    <title>Quero Pechinchar</title>
    </Helmet>
    <AppBar position="static">
        <Toolbar disableGutters>
    <div style={{ flex: 1 }} />
    <Tooltip id="tooltip-icon2" title="GitHub repository">
        <IconButton
    name="github"
    aria-label="Open Github"
    color="inherit"
    href="https://github.com/moovin-hackathon/quero-pechinchar"
    target="_blank"
    rel="noopener"
        >
        <GitHubIcon />
        </IconButton>
        </Tooltip>
        </Toolbar>
        </AppBar>

        <div className={classes.root}>
        <div className={classes.hero}>
        <div className={classes.content}>
        <Box display="flex" justifyContent="center">
        <img src={Logo} alt="Material-UI Logo" className={classes.logo} />
    </Box>
    <div className={classes.text}>
        <Typography
    variant="h3"
    align="center"
    component="h1"
    color="inherit"
    gutterBottom
    className={classes.title}
        >
        {'SEJA BEM VINDO AO QUERO PECHINCHAR!'}
        </Typography>
        <Typography variant="h5" component="h2" color="inherit" gutterBottom className={classes.h5}>
        {'Tema: Alavancando vendas através dos canais digitais.'}
        </Typography>
        <Button
    onClick={() => {
        history.push('/product')
    }}
    className={classes.button}
    variant="outlined"
    color="primary"
        >
        {'Comece agora!'}
        </Button>
        </div>

        <div className={classes.cardsContent}>
        <Card className={classes.card}>
        <CardContent>
        <Typography variant="h5" component="h2">
        O que é?
</Typography>
    <br />
    <Typography>{'Quero Pechinchar é um módulo em forma de campanha para alavancar as vendas de seu e-commerce de um modo mais dinâmico.'}</Typography>
    </CardContent>
    </Card>
    <Card className={classes.card}>
        <CardContent>
        <Typography variant="h5" component="h2">
        Qual o diferencial?
</Typography>
    <br />
    <Typography>{'Influencia a utilização de redes sociais como modo de divulgação. Os consumidores recebem descontos dependendo do quanto o produto foi compartilhado'}</Typography>
    </CardContent>
    </Card>
    <Card className={classes.card}>
        <CardContent>
        <Typography variant="h5" component="h2">
        Nosso stack
    </Typography>
    <br />
    <Typography>{'[Firebase] (https://firebase.google.com/) [React](https://github.com/facebookincubator/create-react-app) [Material-UI](https://material-ui.com/)'}</Typography>
    </CardContent>
    </Card>
    </div>

    </div>
    </div>
    </div>
    </div>
)
}

export default withRouter(withStyles(styles, { withTheme: true })(LandingPage))
