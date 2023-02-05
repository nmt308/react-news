import { useState, useEffect } from 'react';
import ArticleWithAvt from '../../components/ArticleWithAvt';
import SkeletonLoading from '../../components/ArticleWithAvt/skeleton';
import request from '../../utils/request';
import { useSearchParams } from 'react-router-dom';
import { Box, Breadcrumbs, Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigateSearch } from '../../CustomHook';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Search() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [searchParams] = useSearchParams();
    const page: any = searchParams.get('page') || 1;
    const q: string | null = searchParams.get('q');
    const countPage = count / 10;

    const navigate = useNavigateSearch();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        navigate(`/search`, { q: q, page: value });
        setLoading(true);
        setArticles([]);
    };
    const renderArticles = () => {
        if (articles.length > 0 && !loading) {
            return articles.map((article) => {
                return <ArticleWithAvt data={article} />;
            });
        }
        if (articles.length === 0) {
            if (loading) {
                return Array.from(Array(10)).map((item) => <SkeletonLoading />);
            } else {
                return <div className="w-100 mt-5 text-center">No article was found. Please try again</div>;
            }
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    // useEffect(() => {
    //     const getArticles = async () => {
    //         try {
    //             request
    //                 .get('/article/getArticles', {
    //                     params: {
    //                         lang: 'eng',
    //                         action: 'getArticles',
    //                         keyword: q,
    //                         includeArticleImage: true,
    //                         articlesPage: page,
    //                         articlesCount: 10,
    //                         articlesSortBy: 'date',
    //                         articlesSortByAsc: false,
    //                         articlesArticleBodyLen: -1,
    //                         resultType: 'articles',
    //                         dataType: ['news', 'pr'],
    //                         apiKey: process.env.REACT_APP_API_HOME1,
    //                         forceMaxDataTimeWindow: 31,
    //                     },
    //                 })
    //                 .then((res) => {
    //                     setArticles(res.data.articles.results);
    //                     setLoading(false);
    //                     setCount(res.data.articles.pages);
    //                 });
    //         } catch {
    //             setLoading(false);
    //         }
    //     };
    //     getArticles();
    // }, [page, q]);

    return (
        <div className="news-homeblock2 news-homeblock5 py-5">
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

                <div className="row">{renderArticles()}</div>
                {articles.length > 0 && (
                    <ul className="site-pagination text-center mt-md-5 mt-4">
                        <Stack spacing={2}>
                            <Pagination count={count} page={parseInt(page)} onChange={handleChange} shape="rounded" />
                        </Stack>
                    </ul>
                )}
            </div>
        </div>
    );
}
