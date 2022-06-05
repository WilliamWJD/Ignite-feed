import { Header } from './components/Header';

import { Post } from './components/Post';

import styles from './app.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            title="William Dias"
            content=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quidem vero beatae iusto dolores, fuga magnam, ipsa reprehenderit nobis officiis, possimus cupiditate veniam commodi voluptas ea eaque distinctio necessitatibus quibusdam?"
          />
          <Post
            title="William Dias"
            content=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quidem vero beatae iusto dolores, fuga magnam, ipsa reprehenderit nobis officiis, possimus cupiditate veniam commodi voluptas ea eaque distinctio necessitatibus quibusdam?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
