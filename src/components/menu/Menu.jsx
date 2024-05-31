import { menuItems } from "../../data"
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export default function Menu({ parentName, showArrows }) {
    return (
        <nav className={parentName}>
            {
                menuItems.map((item, index) => {
                    return (
                        <div key={index} className={`${parentName}__item`}>
                            <Box className={`${parentName}__link`}>
                                <Link to={item.path}>{item.name} </Link>
                                {
                                    Array.isArray(item?.subItems) && (
                                        <nav className={`${parentName}__sub-menu`}>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Box key={subIndex} className={`${parentName}__sub-link`}>
                                                    <Link to={subItem.path}>{subItem.name}</Link>
                                                    { showArrows && <KeyboardArrowRightIcon className="arrow" /> }
                                                </Box>
                                            ))}
                                        </nav>
                                    )
                                }

                                { index !== menuItems.length - 1 && showArrows && <KeyboardArrowDownIcon className="arrow" /> }
                            </Box>
                        </div>
                    );
                })
            }
        </nav>
    )
}