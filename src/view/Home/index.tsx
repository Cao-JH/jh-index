// 引入组件
import TopBar from "./TopBar";
import Container from "../Container";

// 引入样式
import "./index.scss";

export default function Home() {
  return (
    <>
      <section id="home">
        <header>
          <TopBar />
        </header>
        <main>
          <Container />
        </main>
      </section>
    </>
  );
}
