import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap:"wrap",
    justifyContent: "center",
    marginTop: 20
  },
  icon: {
    width: 150,
    height: 150,
    color: "#A19F9F"
  },
  infodiv: {
    width: "85%",
    margin: "auto"
  },
  question: {
    marginTop: 10
  }
}));

const HelpPage = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />

      <div className={classes.root}>
        <AccountCircleIcon className={classes.icon}/>
      </div>

      <Typography variant="h4" gutterBottom>
        <b>KIM MIN JI</b>
      </Typography>

      <div className={classes.infodiv}>
        <Card className={classes.infocard} variant="outlined">
          <CardContent>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="center">
                      <b>GitHub</b>
                    </TableCell>
                    <TableCell align="center">
                      <Link href="https://github.com/wisdomin121" className={classes.link}>
                        https://github.com/wisdomin121
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <b>INSTAGRAM</b>
                    </TableCell>
                    <TableCell align="center">
                      <Link href="https://www.instagram.com/mingmengmong__/?hl=ko" className={classes.link}>
                        https://www.instagram.com/mingmengmong__/?hl=ko
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <b>E-MAIL</b>
                    </TableCell>
                    <TableCell align="center">
                      wisdomin121@naver.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <b>PHONE</b>
                    </TableCell>
                    <TableCell align="center">
                      010-6698-4370
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h6" gutterBottom className={classes.question}>
              If you have any questions, please contact me
            </Typography>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </>
  );
};

export default HelpPage;