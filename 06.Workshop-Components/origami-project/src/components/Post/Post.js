import x from './Post.module.css';

const Post = () => (
    <div className={x.post}>
        <img src="blue-origami-bird.png" alt="Origami" />
        <p className={x.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo maiores accusamus, ullam aliquid unde, rem nihil eius id sequi quam fuga a non error sint cum ducimus vero repudiandae ratione adipisci ea ab illo? Earum architecto repellat non modi sapiente dolores inventore quam ipsa, quibusdam commodi eveniet omnis labore quae esse eos voluptate doloribus blanditiis magni! Molestias cumque debitis ex, impedit distinctio qui similique aut, ratione repellat, eius quam. Magni at hic totam quis quidem molestias sunt laudantium nulla eos!</p>
        <div>
            <span>
                <small>Author: </small>
                Some Anonymous
            </span>
        </div>
    </div>
)

export default Post;