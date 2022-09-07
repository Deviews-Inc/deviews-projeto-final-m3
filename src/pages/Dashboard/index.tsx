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
import { useNavigate } from "react-router-dom";

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

  const divScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;
      if (ratio > 0) {
        setPage((previousPage) => previousPage + 1);
      }
    });
    if (divScrollRef.current) {
      intersectionObserver.observe(divScrollRef.current);
    }
    return () => {
      intersectionObserver.disconnect();
    };
  }, [divScrollRef, setPage]);

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
                <div ref={divScrollRef} />
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
                <div ref={divScrollRef} />
              </main>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
};

export default Dashboard;
