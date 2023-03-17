import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: "#325054",
      padding: theme.spacing(4, 0, 2),
    },
    cardMedia: {
        paddingTop: "56.25%", //16:9 ratio
      },
  };
});
export default useStyles;
