import React from 'react';
import { Trans } from '@lingui/macro';
import { Flex } from '@tranzact/core';
import {
  Typography,
  Grid,
  List,
  Button,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import {
  ArrowBackIos as ArrowBackIosIcon,
  InvertColors as InvertColorsIcon,
} from '@material-ui/icons';
import {
  changeCreateWallet,
  ALL_OPTIONS,
  CREATE_CC_WALLET_OPTIONS,
  CREATE_EXISTING_CC,
  CREATE_NEW_CC,
  CREATE_RL_WALLET_OPTIONS,
  CREATE_RL_ADMIN,
  CREATE_RL_USER,
  CREATE_DID_WALLET_OPTIONS,
  CREATE_DID_WALLET,
  RECOVER_DID_WALLET,
} from '../../../modules/createWallet';
import { CreateNewCCWallet } from './createNewColouredCoin';
import { CreateExistingCCWallet } from './createExistingColouredCoin';
import { CreateRLAdminWallet } from './createRLAdmin';
import { CreateRLUserWallet } from './createRLUser';
// import CreateDIDWallet from './createDIDWallet';
// import { RecoverDIDWallet } from './recoverDIDWallet';
import WalletCreateCard from './WalletCreateCard';
import WalletCreateList from './WalletCreateList';
import WalletDIDList from '../did/WalletDIDList';

export const useStyles = makeStyles((theme) => ({
  walletContainer: {
    marginBottom: theme.spacing(5),
  },
  root: {
    display: 'flex',
    paddingLeft: '0px',
    color: '#000000',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    minWidth: '100%',
  },
  cardTitle: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    paddingTop: 6,
  },
  sendButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 150,
    height: 50,
  },
  backdrop: {
    zIndex: 3000,
    color: '#fff',
  },
}));

export const CCListItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  function goBack() {
    dispatch(changeCreateWallet(ALL_OPTIONS));
  }

  function select_option_new() {
    dispatch(changeCreateWallet(CREATE_NEW_CC));
  }

  function select_option_existing() {
    dispatch(changeCreateWallet(CREATE_EXISTING_CC));
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.cardTitle}>
          <Box display="flex">
            <Box>
              <Button onClick={goBack}>
                <ArrowBackIosIcon> </ArrowBackIosIcon>
              </Button>
            </Box>
            <Box flexGrow={1} className={classes.title}>
              <Typography component="h6" variant="h6">
                <Trans>Coloured Coin Options</Trans>
              </Typography>
            </Box>
          </Box>
        </div>
        <List>
          <ListItem button onClick={select_option_new}>
            <ListItemIcon>
              <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText primary={<Trans>Create new coloured coin</Trans>} />
          </ListItem>
          <ListItem button onClick={select_option_existing}>
            <ListItemIcon>
              <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Trans>Create wallet for existing colour</Trans>}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export const RLListItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  function goBack() {
    dispatch(changeCreateWallet(ALL_OPTIONS));
  }

  function select_option_admin() {
    dispatch(changeCreateWallet(CREATE_RL_ADMIN));
  }

  function select_option_user() {
    dispatch(changeCreateWallet(CREATE_RL_USER));
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.cardTitle}>
          <Box display="flex">
            <Box>
              <Button onClick={goBack}>
                <ArrowBackIosIcon> </ArrowBackIosIcon>
              </Button>
            </Box>
            <Box flexGrow={1} className={classes.title}>
              <Typography component="h6" variant="h6">
                <Trans>Rate Limited Options</Trans>
              </Typography>
            </Box>
          </Box>
        </div>
        <List>
          <ListItem button onClick={select_option_admin}>
            <ListItemIcon>
              <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText primary={<Trans>Create admin wallet</Trans>} />
          </ListItem>
          <ListItem button onClick={select_option_user}>
            <ListItemIcon>
              <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText primary={<Trans>Create user wallet</Trans>} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};


export function CreateWalletView() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact>
        <WalletCreateList />
      </Route>
      <Route path={`${path}/did`}>
        <WalletDIDList />
      </Route>
    </Switch>
  );

  /*
  return (

        {view === ALL_OPTIONS && }
        {view === CREATE_CC_WALLET_OPTIONS && <CCListItems />}
        {view === CREATE_NEW_CC && <CreateNewCCWallet />}
        {view === CREATE_EXISTING_CC && <CreateExistingCCWallet />}
        {view === CREATE_RL_WALLET_OPTIONS && <RLListItems />}
        {view === CREATE_RL_ADMIN && <CreateRLAdminWallet />}
        {view === CREATE_RL_USER && <CreateRLUserWallet />}
        {view === CREATE_DID_WALLET_OPTIONS && <DIDListItems />}
        {view === CREATE_DID_WALLET && <CreateDIDWallet />}
        {view === RECOVER_DID_WALLET && <RecoverDIDWallet />}
      </CardContent>
    </Card>
  );*/
}
