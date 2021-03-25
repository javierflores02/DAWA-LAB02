import Part  from '../part/part.js';

const Content = (props) => {
    const {parts} = props
    return (
    <>
        {parts.map((part,index) =>
            <Part key={index} part={part.name} exercises={part.exercises} />
        )}
    </>
    )
}

export default Content