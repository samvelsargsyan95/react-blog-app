import * as React from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,

} from '@mui/material/';

export default function Modal({ data, isOpenModal, setIsOpenModal }) {

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpenModal}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>

            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={ data?.img }
                        alt={ `Post from ${ data?.autor }` }
                    />
                    <CardContent>
                      <p className="post__tags">{ data?.tags }</p>
                      <p className="post__title"><b>{ data?.title }</b></p>
                      <p className="post__autor-date-views">
                          <b className="post__autor">{ data?.autor }</b>
                          <span className="post__date">{ data?.date }</span>
                          <span>{ data?.views } Views</span>
                      </p>
                      <p className="post__description">{ data?.text }</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}