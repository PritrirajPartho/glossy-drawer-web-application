import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axiosSecure from 'axios';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res.data.instructor)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;