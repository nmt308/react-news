import { createSearchParams, useNavigate } from 'react-router-dom';

const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname: string, params: {}) => navigate(`${pathname}?${createSearchParams(params)}`);
};
export default useNavigateSearch;
