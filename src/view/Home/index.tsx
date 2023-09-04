// 引入组件
import TopBar from "./TopBar";
import Container from "../Container";
import Aside from "./Aside";

// 引入样式
import "./index.scss";

export default function Home() {
  return (
    <>
      <section id="home">
        <section>
          <header>
            <TopBar />
          </header>
          <aside>
            <Aside />
          </aside>
        </section>
        <section>
          <main>
            <Container />
          </main>
        </section>
      </section>
    </>
  );
}
