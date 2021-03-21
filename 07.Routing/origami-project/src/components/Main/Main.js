import Post from '../Post';

const Main = ({ posts }) => (
    <main className='main'>
        <h1>Sooooooooome Heading</h1>
        <div className='posts'>
            {posts.map(x => <Post key={x.id} post={x} />)}
        </div>
        <style jsx>{`
        h1{
            text-align: center;
            color: #234465;
            text-decoration: underline;
            margin: 1% 0 2% 0;
        }
        .main{
            flex-basis: 83%;
            height: auto;
        }
        `}</style>
    </main>
);

export default Main;