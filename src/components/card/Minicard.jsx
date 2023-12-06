import "./Minicard.css"

const MiniCard = ({ image, content, paragraph }) => {
    return (
        <div className="mini">
           <div className="mini-div">
             <div className='contentone '>
                <h1 className="heading-minicard">{content}</h1>
                <p className='para'>{paragraph}</p>
            </div>
            <div className='imageone'>
                <img src={image} alt='img' />
            </div>
           </div>

        </div>
    );
};

export default MiniCard;