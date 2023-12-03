import "./Minicard.css"

const MiniCard = ({ image, content, paragraph }) => {
    return (
        <div className="mini">
            <div className='contentone '>
                <h1>{content}</h1><br />
                <p className='para'>{paragraph}</p>
            </div>
            <div className='imageone'>
                <img src={image} alt='img' />
            </div>

        </div>
    );
};

export default MiniCard;