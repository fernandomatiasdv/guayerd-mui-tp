import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  details: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    height: "200px",
  },
}));

export default useStyles;
