import './Posts.scss'
import Modal from '../../components/modal/Modal';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

export default function Posts({ filteredPostData }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [selectedPost, setSelectedPost] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openPostModal = (post) => {
        setSelectedPost(post)
        setIsOpenModal(true)
    }

    return (
        <main className="posts">
            <Grid 
                container justifyContent="center"
                sx={{ gap: '3rem' }}
            >
                {
                    filteredPostData.map((item, index) => {
                        return (
                            <Grid   
                                item      
                                xs={12} 
                                sm={isMobile ? 12 : 6} 
                                md={isTablet ? 6 : 4} 
                                lg={3}  
                                key={index}
                                className="post"
                                onClick={() => openPostModal(item)}
                            >
                                <img 
                                    src={item?.img} 
                                    srcSet={item?.img_2x}
                                    alt={`Post from ${ item?.autor }`}
                                />

                                <p className="post__tags">{ item?.tags }</p>
                                <p className="post__title"><b>{ item?.title }</b></p>
                                <p className="post__autor-date-views">
                                    <b className="post__autor">{ item?.autor }</b>
                                    <span className="post__date">{ item?.date }</span>
                                    <span>{ item?.views } Views</span>
                                </p>
                                <p className="post__description">{ item?.text }</p>
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Modal 
                data={selectedPost} 
                isOpenModal={isOpenModal} 
                setIsOpenModal={setIsOpenModal} 
            />
        </main>
    )
}