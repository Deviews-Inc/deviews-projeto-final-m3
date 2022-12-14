import { useContext, useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Loading from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import { AuthContext } from "../../providers/AuthContext";
import { Container, ContainerMain } from "./styles";
import { PostContext } from "../../providers/PostContext";
import { BiPencil } from "react-icons/bi";
import ButtonEdit from "../../components/ButtonEdit";
import UserProfile from "../../components/UserProfile";
import api from "../../services/api";
import Modal from "../../components/Modal";
import UserModal from "../../components/UserModal";

const Profile = () => {
  const { openUserModal, setOpenUserModal, loading } = useContext(AuthContext);
  const { page, setPage, setPosts, reloadPostUser } = useContext(PostContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const user = localStorage.getItem("@deviews:id");
    const token = localStorage.getItem("@deviews:token");
    try {
      api
        .get(
          `/posts?_page=${page}&_limit=10&_sort=id&_order=desc&_embed=answers&userId=${user}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          if (res.data.length > 0) {
            setPosts(res.data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, [reloadPostUser, page]);

  const divScroll = document.querySelector("#scrollInfinite");

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage((previous) => previous + 1);
      }
    });
    divScroll !== null
      ? intersectionObserver.observe(divScroll)
      : intersectionObserver.disconnect();
  }, [divScroll]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {isDesktop ? (
        <>
          {openUserModal && (
            <Modal onClose={() => setOpenUserModal(false)}>
              <UserModal />
            </Modal>
          )}
          <Container>
            <Header />
            <ContainerMain>
              <aside className="container_info_user"></aside>
              <main>
                <div className="container_profile">
                  <UserProfile />
                  <ButtonEdit>Editar Perfil</ButtonEdit>
                </div>
                <div className="container_posts">
                  <FormPost />
                  <PostList />
                  <div id="scrollInfinite" />
                </div>
              </main>
              <aside className="container_search">
                <SearchInput />
              </aside>
            </ContainerMain>
          </Container>
        </>
      ) : (
        <>
          {openUserModal && (
            <Modal onClose={() => setOpenUserModal(false)}>
              <UserModal />
            </Modal>
          )}
          <Container>
            <Header />
            <ContainerMain>
              <aside className="container_info_user">
                <UserProfile />
                <ButtonEdit>
                  <BiPencil />
                </ButtonEdit>
              </aside>
              <aside className="container_search">
                <SearchInput />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
                <div id="scrollInfinite" />
              </main>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
};

export default Profile;
