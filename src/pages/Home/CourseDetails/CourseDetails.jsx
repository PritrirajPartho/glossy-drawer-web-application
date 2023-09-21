
import { useLoaderData } from 'react-router-dom';
import CourseAllDetails from './CourseAllDetails';

const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div className="grid gap-5 mb-8 mt-10 lg:grid-cols-3 ">
            {
                details.map(detail => <CourseAllDetails
                    key={detail.id}
                    detail={detail}
                ></CourseAllDetails>)
            }

        </div>
    );
};

export default CourseDetails;