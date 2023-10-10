import { React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Intro.module.css'
import video from '../images/stars.mp4'
import image from '../images/starimage.png'
import Footer from './Footer';


function Intro() {
    return (
        <>
        <div className={app.ContentBox}>
        <h3> Servicios </h3> 
        <p className={styles.IntroText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
        </div>
        </>
    );
}

export default Intro;

