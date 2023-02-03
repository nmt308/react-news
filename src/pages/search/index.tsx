import { useState, useEffect } from 'react';
import ArticleWithAvt from '../../components/ArticleWithAvt';
import SkeletonLoading from '../../components/ArticleWithAvt/skeleton';
import request from '../../utils/request';
import { useSearchParams } from 'react-router-dom';
import { Box, Breadcrumbs, Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigateSearch } from '../../CustomHook';
import { Link } from 'react-router-dom';
export default function Search() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [searchParams] = useSearchParams();
    const page: any = searchParams.get('page') || 1;
    const q: string | null = searchParams.get('q');
    const countPage = count / 10;
    console.log(count, countPage);
    const navigate = useNavigateSearch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        navigate(`/search`, { q: q, page: value });
        setLoading(true);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await request.get(`/everything`, {
                params: {
                    q: q,
                    apiKey: process.env.REACT_APP_API,
                    pageSize: '10',
                    page: page,
                    language: 'en',
                },
            });

            setArticles(res.data.articles);
            setLoading(false);
            setCount(res.data.totalResults);
        };
        getArticles();
    }, [page, q]);

    return (
        <div className="w3l-homeblock2 w3l-homeblock5 py-5">
            <div className="container pb-md-5">
                <Box
                    sx={{
                        borderRadius: '8px',
                        padding: '12px 16px',
                        backgroundColor: 'white',
                    }}
                >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            <i className="fa-solid fa-house" style={{ marginRight: '8px' }}></i>
                            Home
                        </Link>
                        <Link color="inherit" to="/material-ui/getting-started/installation/">
                            Search
                        </Link>
                    </Breadcrumbs>
                </Box>

                <div className="row">
                    {articles.length > 0 && !loading
                        ? articles.map((article) => {
                              return <ArticleWithAvt data={article} />;
                          })
                        : Array.from(Array(10)).map((item) => <SkeletonLoading />)}
                </div>
                <ul className="site-pagination text-center mt-md-5 mt-4">
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(countPage) > 10 ? 10 : Math.ceil(countPage)}
                            page={parseInt(page)}
                            onChange={handleChange}
                            shape="rounded"
                        />
                    </Stack>
                </ul>
            </div>
        </div>
    );
}
