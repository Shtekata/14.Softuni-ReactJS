import x from './Main.module.css';
import Post from '../Post';

const Main = () => (
    <main className={x.main}>
        <h1>Sooooooooome Heading</h1>
        <div className={x.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </main>
)

export default Main;