import React, { useEffect, useState } from "react";
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import { useFetching } from "../hooks/useFethcing";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../components/PostFilter";
import Postlist from "../components/Postlist";
import Postform from "../components/Postform";
import Pagination from "../UI/pagination/Pagination";
import Loader from "../UI/loader/Loader";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ query: "", sort: "" });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            <MyButton
                style={{ marginTop: "30px", marginBottom: "20px" }}
                onClick={() => setModal(true)}
            >
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <Postform create={createPost} />
            </MyModal>
            <hr style={{ margin: "10px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && (
                <h1 style={{ textAlign: "center" }}>
                    Произошла ошибка {postError}
                </h1>
            )}
            {isPostLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 50 + "px",
                    }}
                >
                    {" "}
                    <Loader />{" "}
                </div>
            ) : (
                <Postlist remove={removePost} posts={sortedAndSearchedPosts} />
            )}
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
}
export default Posts;
