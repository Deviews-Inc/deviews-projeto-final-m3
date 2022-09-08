import { useContext, useRef, useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PostList from "../../components/PostList";
import PostModal from "../../components/PostModal";
import Loading from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import UserOptions from "../../components/UserOptions";
import { AuthContext } from "../../providers/AuthContext";
import { Container, ContainerMain } from "./styles";
import { PostContext } from "../../providers/PostContext";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);

  const { setPage } = useContext(PostContext);

  const { openPostModal, setOpenPostModal } = useContext(PostContext);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  const divScroll = document.querySelector("#scrollInfinite");

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)){
        setPage((previous) => previous + 1)
      }
    });
    (divScroll !== null) ? intersectionObserver.observe(divScroll)
    : intersectionObserver.disconnect();
  }, [divScroll])

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {isDesktop ? (
        <>
          {openPostModal && (
            <Modal onClose={() => setOpenPostModal(false)}>
              <PostModal />
            </Modal>
          )}

          <Container>
            <Header />
            <ContainerMain>
              <aside className="container_info_user">
                <UserOptions />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
                <div id="scrollInfinite"/>
              </main>
              <aside className="container_search">
                <SearchInput />
              </aside>
            </ContainerMain>
          </Container>
        </>
      ) : (
        <>
          {openPostModal && (
            <Modal onClose={() => setOpenPostModal(false)}>
              <PostModal />
            </Modal>
          )}

          <Container>
            <Header />
            <ContainerMain>
              <aside className="container_info_user">
                <UserOptions />
              </aside>
              <aside className="container_search">
                <SearchInput />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
                <div id="scrollInfinite"/>
              </main>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
};

export default Dashboard;
