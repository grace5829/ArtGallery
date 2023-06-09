import "./AllArt.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  adaptV4Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { v4 } from "uuid";
import SingleArt from "./SingleArt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const AllArt = () => {
  const [artWork, setArtWork] = useState([]);
  const [imageTriggerPopup, setImageTriggerPopup] = useState({0:false, 1:false,2:false,3:false, 4:false,5:false,6:false, 7:false,8:false,9:false,10:false, 11:false});
  const [page, setPage] = useState(1);
  const [apiLink, setApiLink] = useState("");
  const { classes } = useStyles();

  useEffect(() => {
    getImage();
  }, [page]);

  let getImage = () => {
    // axios.get(`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,image_url`)
    axios
      .get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=12`)
      .then((res) => {
        const persons = res.data;
        // console.log(res.data);
        setApiLink(res.data.config["iiif_url"]);
        setArtWork(res.data.data);
      });
  };
// console.log(imageTriggerPopup)


  let turnPage=(num)=>{
 if (page+num>0){
    setPage(page+num)
 }
}

const triggerPopup = (num) => {
    imageTriggerPopup[num] === false
      ? setImageTriggerPopup((prev) => ({ ...prev, [num]: true }))
      : setImageTriggerPopup((prev) => ({ ...prev, [num]: false }));
    //   console.log(num)
  };
  const previousPopup = (name, card) => {
    let previous = artWork.indexOf(card) - 1

    triggerPopup(name);
    if (previous>0) {
      triggerPopup(previous);
    } else {
      triggerPopup(11);
    }
  };

  const nextPopup = (name, card) => {
    let next = artWork.indexOf(card) + 1
console.log(next)
    triggerPopup(name);
    if (next<12) {
      triggerPopup(next);
    } else {
      triggerPopup(0);
    }
  };
  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={4}>
          {artWork.map((card) => (
            <Grid item key={card + v4()} xs={12} sm={6} md={4} lg={3}>
                {/* {console.log(card)} */}
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // ${apiLink}/${card['image_id']}/full/843,/0/default.jpg
                  image={`${apiLink}/${card["image_id"]}/full/843,/0/default.jpg`}
                  title="Image title"
                />
                <CardContent>
                
                  <Typography variant="h5" className={classes.folderName}>
                    <div onClick={()=>triggerPopup(artWork.indexOf(card))}>{card.title}</div>

                    <SingleArt                       
                    trigger={imageTriggerPopup[artWork.indexOf(card)]}
                    info={card}
                    imageLink={`${apiLink}/${card["image_id"]}/full/843,/0/default.jpg`}
                      >
                        <ArrowBackIosNewIcon
                          className="arrow"
                          onClick={() => previousPopup(artWork.indexOf(card), card)}
                        />
                        <ArrowForwardIosIcon
                          className="arrow"
                          onClick={() => nextPopup(artWork.indexOf(card), card)}
                        />                        <button onClick={()=>triggerPopup(artWork.indexOf(card))}>close</button>
                      </SingleArt>
                  </Typography>
                  <Typography>
                    <div>{card.artist_title}</div>
                    <div>{card.date_end }</div>
                    <div>{card.artwork_type_title}</div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="bottomViewAll">
<div onClick={()=>turnPage(-1)}> previous </div>
<div id="page"> {page}</div>
<div onClick={()=>turnPage(1)}> next </div>
    </div>
      </div>
  );
};

export default AllArt;
