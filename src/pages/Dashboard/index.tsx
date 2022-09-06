import { useContext, useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PostList from "../../components/PostList";
import PostModal from "../../components/PostModal";
import SearchInput from "../../components/SearchInput";
import UserOptions from "../../components/UserOptions";
import { PostContext } from "../../providers/PostContext";
import { Container, ContainerMain } from "./styles";

const Dashboard = () => {
  const { openPostModal, setOpenPostModal } = useContext(PostContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <>
          {openPostModal && (
            <Modal onClose={() => setOpenPostModal(false)}>
              <PostModal />
            </Modal>
          )}
          <Header />
          <Container>
            <ContainerMain>
              <aside className="container_info_user">
                <UserOptions />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
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
              <h1>Teste</h1>
            </Modal>
          )}
          <Header />
          <Container>
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
              </main>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
};

export default Dashboard;
