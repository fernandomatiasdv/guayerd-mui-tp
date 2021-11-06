import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Tarjeta.styles";

export default function Tarjeta() {
  const classes = useStyles();

  return (
    <Card className={classes.details}>
      <CardMedia
        className={classes.cover}
        image="https://pbs.twimg.com/media/D6uc2kBX4AAv3xV.jpg"
        title="Knucles"
      />
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Miller Mac MillerMac MillerMac MillerMac MillerMac MillerMac
          MillerMac MillerMac MillerMac MillerMac Miller
        </Typography>
      </CardContent>
    </Card>
  );
}
